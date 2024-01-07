import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

function compose<A, B, C>(f: (_: A) => B, g: (_: B) => C): (_: A) => C {
    return (x: A) => {
        return g(f(x));
    };
}
const id: <A> (_: A) => A = <A> (x: A) => {
    return x;
};
