import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

function length<A>(l: A[]): number {
    if (l.length == 0) {
        return 0;
    } else {
        const [h, ...t] = l;
        return (1 + length(t));
    }
}
const x = 3;
const f: <A> (_: A[]) => number = <A> (l: A[]) => {
    return length(l);
};
const l: number[] = [5, 4, 3, 2, 1];
