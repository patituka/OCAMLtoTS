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

function size(t: Tree<number, string>): number {
    switch (t.tag) {
        case 'leaf':
            const { content: [a] } = t;
            return 1;
        case 'node':
            const { content: [x, l, r] } = t;
            return (1 + max(size(l), size(r)));
    }
}
const t = node("ok", leaf(3), leaf(5));
console.log(size(t));
