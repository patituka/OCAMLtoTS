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

const max1 = (x: number, y: number) => {
    if (x > y) {
        return x;
    } else {
        return y;
    }
};
const max2: (_: number, __: number) => number = (x: number, y: number) => {
    if (x > y) {
        return x;
    } else {
        return y;
    }
};

function max(x: number, y: number): number {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

function max4(x: any, y: any): any {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

function max6(z: any): any {
    const [x, y] = z;
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

function first<A, B>(z: [A, B]): A {
    const [x, y] = z;
    return x;
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

function simple(t: Tree<number, string>): boolean {
    switch (t.tag) {
        case 'leaf':
            const { content: [a] } = t;
            return true;
        default:
            return false;
    }
}

function compose<A, B, C>(f: (_: A) => B, g: (_: B) => C): (_: A) => C {
    return (x: A) => {
        return g(f(x));
    };
}

function succ(x: number): number {
    return (x + 1);
}

function string_of_int(x: number): string {
    return x.toString();
}
const f = compose(succ, string_of_int);
const l: Tree<number, string> = leaf(2);
const t = node("ok", leaf(3), leaf(5));
console.log(size(t));
