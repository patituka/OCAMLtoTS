import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

type Tree<A, B> =
    | { tag: 'leaf', content: [A] }
    | { tag: 'node', content: [B, Tree<A, B>, Tree<A, B>] }

function leaf<A, B>(arg1: A): Tree<A, B> {
    return { tag: 'leaf', content: [arg1] };
}
function node<A, B>(arg1: B, arg2: Tree<A, B>, arg3: Tree<A, B>): Tree<A, B> {
    return { tag: 'node', content: [arg1, arg2, arg3] };
}


function max(x: number, y: number): number {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

function size(t: Tree<number, boolean>): number {
    switch (t.tag) {
        case 'leaf':
            const { content: [a] } = t;
            return 1;
        case 'node':
            const { content: [x, l, r] } = t;
            return max(size(l), size(r));
    }
}

function length<A>(l: A[]): number {
    if (l.length == 0) {
        return 0;
    } else {
        const [h, ...t] = l;
        return (1 + length(t));
    }
}

function concat<A>(l1: A[], l2: A[]): A[] {
    if (l1.length == 0) {
        return l2;
    } else {
        const [h, ...t] = l1;
        return [h, ...concat(t, l2)];
    }
}

function first<A, B>(z: [A, B]): A {
    const [x, y] = z;
    return x;
}

function f5<A, B, C>(f: (_: A) => B, g: (_: B) => C): (_: A) => C {
    return (x: A) => {
        return g(f(x));
    };
}

function combine<A, B>(l1: A[], l2: B[]): [A, B][] {
    if (l1.length == 0) {
        return [];
    } else {
        const [h1, ...t1] = l1;
        if (l2.length == 0) {
            return [];
        } else {
            const [h2, ...t2] = l2;
            return [[h1, h2], ...combine(t1, t2)];
        }
    }
}

function split<A, B>(l: [A, B][]): [A[], B[]] {
    if (l.length == 0) {
        return [[], []];
    } else {
        const [h, ...t] = l;
        const [l1, l2] = split(t);
        const [h1, h2] = h;
        return [[h1, ...l1], [h2, ...l2]];
    }
}
const l2 = [1, 3, 5, 7];
const l3 = [[2, 1], [7, 2]];
const l4: [string, number][] = [["e", 1], ["kjh", 2]];
const l: number[] = [];
