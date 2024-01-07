import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

type MyList<A> =
    | { tag: 'mynil' }
    | { tag: 'mycons', content: [A, MyList<A>] }

function mynil<A>(): MyList<A> {
    return { tag: 'mynil' };
}
function mycons<A>(arg1: A, arg2: MyList<A>): MyList<A> {
    return { tag: 'mycons', content: [arg1, arg2] };
}


type Colour =
    | { tag: 'red' }
    | { tag: 'black' }
    | { tag: 'white' }

function red(): Colour {
    return { tag: 'red' };
}
function black(): Colour {
    return { tag: 'black' };
}
function white(): Colour {
    return { tag: 'white' };
}


type Tree<A, C> =
    | { tag: 'leaf', content: [A] }
    | { tag: 'node', content: [C, Tree<A, C>, Tree<A, C>] }

function leaf<A, C>(arg1: A): Tree<A, C> {
    return { tag: 'leaf', content: [arg1] };
}
function node<A, C>(arg1: C, arg2: Tree<A, C>, arg3: Tree<A, C>): Tree<A, C> {
    return { tag: 'node', content: [arg1, arg2, arg3] };
}


function toInt(c: Colour): number {
    switch (c.tag) {
        case 'red':
            return 0;
        case 'black':
            return 1;
        case 'white':
            return 2;
    }
}

function length<A>(l: MyList<A>): number {
    switch (l.tag) {
        case 'mynil':
            return 0;
        case 'mycons':
            const { content: [h, t] } = l;
            return (1 + length(t));
    }
}

function max(x: number, y: number): number {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

function size<A, B>(t: Tree<A, B>): number {
    switch (t.tag) {
        case 'leaf':
            const { content: [a] } = t;
            return 1;
        case 'node':
            const { content: [x, l, r] } = t;
            return max(size(l), size(r));
    }
}
const c = red();
const l: Tree<number, string> = leaf(3);
const t = node("abc", leaf(7), leaf(size(l)));
