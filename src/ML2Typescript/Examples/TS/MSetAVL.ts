import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

type Comparaison =
    | { tag: 'eq' }
    | { tag: 'lt' }
    | { tag: 'gt' }

function eq(): Comparaison {
    return { tag: 'eq' };
}
function lt(): Comparaison {
    return { tag: 'lt' };
}
function gt(): Comparaison {
    return { tag: 'gt' };
}


type Tree<A> =
    | { tag: 'empty' }
    | { tag: 'node', content: [number, Tree<A>, A, Tree<A>] }

function empty<A>(): Tree<A> {
    return { tag: 'empty' };
}
function node<A>(arg1: number, arg2: Tree<A>, arg3: A, arg4: Tree<A>): Tree<A> {
    return { tag: 'node', content: [arg1, arg2, arg3, arg4] };
}


function check(res: number): Comparaison {
    if (res == 0) {
        return eq();
    } else {
        if (res < 0) {
            return lt();
        } else {
            return gt();
        }
    }
}

function max(i: number, j: number): number {
    if (i > j) {
        return i;
    } else {
        return j;
    }
}

function getOrElse<A>(opt: Option<A>, other: A): A {
    switch (opt.tag) {
        case 'none':
            return other;
        case 'some':
            const { content: [v] } = opt;
            return v;
    }
}

function is_empty<A>(t: Tree<A>): boolean {
    switch (t.tag) {
        case 'empty':
            return true;
        case 'node':
            const { content: [, , , ] } = t;
            return false;
    }
}

function mem<A>(x: A, t: Tree<A>, cmp: (_: A, __: A) => number): boolean {
    switch (t.tag) {
        case 'empty':
            return false;
        case 'node':
            const { content: [, l, k, r] } = t;
            switch (check(cmp(x, k)).tag) {
                case 'eq':
                    return true;
                case 'lt':
                    return mem(x, l, cmp);
                case 'gt':
                    return mem(x, r, cmp);
            }
    }
}

function find<A>(x: A, t: Tree<A>, cmp: (_: A, __: A) => number): Option<A> {
    switch (t.tag) {
        case 'empty':
            return none();
        case 'node':
            const { content: [, l, k, r] } = t;
            switch (check(cmp(x, k)).tag) {
                case 'eq':
                    return some(k);
                case 'lt':
                    return find(x, l, cmp);
                case 'gt':
                    return find(x, r, cmp);
            }
    }
}

function min_elt<A>(t: Tree<A>): Option<A> {
    switch (t.tag) {
        case 'empty':
            return none();
        case 'node':
            const { content: [, l, x, ] } = t;
            switch (l.tag) {
                case 'empty':
                    return some(x);
                case 'node':
                    const { content: [, , , ] } = l;
                    return min_elt(l);
            }
    }
}

function max_elt<A>(t: Tree<A>): Option<A> {
    switch (t.tag) {
        case 'empty':
            return none();
        case 'node':
            const { content: [, , x, r] } = t;
            switch (r.tag) {
                case 'empty':
                    return some(x);
                case 'node':
                    const { content: [, , , ] } = r;
                    return max_elt(r);
            }
    }
}

function height<A>(t: Tree<A>): number {
    switch (t.tag) {
        case 'empty':
            return 0;
        case 'node':
            const { content: [h, , , ] } = t;
            return h;
    }
}

function size<A>(t: Tree<A>): number {
    switch (t.tag) {
        case 'empty':
            return 0;
        case 'node':
            const { content: [h, l, , r] } = t;
            return ((size(l) + size(r)) + 1);
    }
}

function create<A>(l: Tree<A>, x: A, r: Tree<A>): Tree<A> {
    return node((max(height(l), height(r)) + 1), l, x, r);
}

function leaf<A>(x: A): Tree<A> {
    return create(empty(), x, empty());
}

function bal<A>(l: Tree<A>, x: A, r: Tree<A>): Tree<A> {
    const hl: number = height(l);
    const hr: number = height(r);
    if ((hr + 2) < hl) {
        switch (l.tag) {
            case 'empty':
                throw new Error()
            case 'node':
                const { content: [, ll, lx, lr] } = l;
                if (!(height(lr) > height(ll))) {
                    return create(ll, lx, create(lr, x, r));
                } else {
                    switch (lr.tag) {
                        case 'empty':
                            throw new Error()
                        case 'node':
                            const { content: [, lrl, lrx, lrr] } = lr;
                            return create(create(ll, lx, lrl), lrx, create(lrr, x, r));
                    }
                }
        }
    } else {
        if ((hl + 2) < hr) {
            switch (r.tag) {
                case 'empty':
                    throw new Error()
                case 'node':
                    const { content: [, rl, rx, rr] } = r;
                    if (!(height(rl) > height(rr))) {
                        return create(create(l, x, rl), rx, rr);
                    } else {
                        switch (rl.tag) {
                            case 'empty':
                                throw new Error()
                            case 'node':
                                const { content: [, rll, rlx, rlr] } = rl;
                                return create(create(l, x, rll), rlx, create(rlr, rx, rr));
                        }
                    }
            }
        } else {
            return create(l, x, r);
        }
    }
}

function add<A>(x: A, t: Tree<A>, cmp: (_: A, __: A) => number): Tree<A> {
    switch (t.tag) {
        case 'empty':
            return leaf(x);
        case 'node':
            const { content: [h, l, y, r] } = t;
            switch (check(cmp(x, y)).tag) {
                case 'eq':
                    return create(l, y, r);
                case 'lt':
                    return bal(add(x, l, cmp), y, r);
                case 'gt':
                    return bal(l, y, add(x, r, cmp));
            }
    }
}

function remove_min<A>(l: Tree<A>, x: A, r: Tree<A>): [Tree<A>, A] {
    switch (l.tag) {
        case 'empty':
            return [r, x];
        case 'node':
            const { content: [, ll, lx, lr] } = l;
            const [l2, m] = remove_min(ll, lx, lr);
            return [bal(l2, x, r), m];
    }
}

function merge<A>(s1: Tree<A>, s2: Tree<A>): Tree<A> {
    switch (s1.tag) {
        case 'empty':
            return s2;
        case 'node':
            const { content: [, , , ] } = s1;
            switch (s2.tag) {
                case 'empty':
                    return s1;
                case 'node':
                    const { content: [, l2, x2, r2] } = s2;
                    const [s3, m] = remove_min(l2, x2, r2);
                    return bal(s1, m, s3);
            }
    }
}

function remove<A>(x: A, t: Tree<A>, cmp: (_: A, __: A) => number): Tree<A> {
    switch (t.tag) {
        case 'empty':
            return empty();
        case 'node':
            const { content: [, l, y, r] } = t;
            switch (check(cmp(x, y)).tag) {
                case 'eq':
                    return merge(l, r);
                case 'lt':
                    return bal(remove(x, l, cmp), y, r);
                case 'gt':
                    return bal(l, y, remove(x, r, cmp));
            }
    }
}

function toList<A>(t: Tree<A>): A[] {
    switch (t.tag) {
        case 'empty':
            return [];
        case 'node':
            const { content: [, l, y, r] } = t;
            return [...toList(l), ...[y, ...toList(r)]];
    }
}
