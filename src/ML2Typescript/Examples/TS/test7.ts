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


type Tree<A, B> =
    | { tag: 'leaf', content: [A] }
    | { tag: 'node', content: [B, Tree<A, B>, Tree<A, B>] }

function leaf<A, B>(arg1: A): Tree<A, B> {
    return { tag: 'leaf', content: [arg1] };
}
function node<A, B>(arg1: B, arg2: Tree<A, B>, arg3: Tree<A, B>): Tree<A, B> {
    return { tag: 'node', content: [arg1, arg2, arg3] };
}


type Point = {x: number, y: number}

type Pair<A, B> = {fst: A, snd: B}
const p: Pair<number, string> = { fst: 4, snd: "something" };
const p1 = p.fst;
const p2 = p.snd;

function a(): number {
    const { fst: f } = p;
    return f;
}

function b(): string {
    const { fst: f, snd: s } = p;
    return s;
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
const t: Tree<number, string> = node("abc", leaf(7), leaf(size(l)));
