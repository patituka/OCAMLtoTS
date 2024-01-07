import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

function f1(x: number): number {
    return (x * 2);
}

function f2(x: number, y: number): number {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

function f3(x: number): (_: number) => number {
    return (y: number) => {
        if (x < y) {
            return x;
        } else {
            return y;
        }
    };
}

function f4(f: (_: number) => boolean, g: (_: boolean) => string): (_: number) => string {
    return (x: number) => {
        return g(f(x));
    };
}

function f5<A, B, C>(f: (_: A) => B, g: (_: B) => C): (_: A) => C {
    return (x: A) => {
        return g(f(x));
    };
}
