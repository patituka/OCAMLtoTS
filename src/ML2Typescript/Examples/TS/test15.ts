import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

function maFonction(z: number): any {
    return z;
}
const hello = maFonction(3);

function unzip<A, B>(l: [A, B][]): [A[], B[]] {
    if (l.length == 0) {
        return [[], []];
    } else {
        const [h, ...t] = l;
        const [h1, h2] = h;
        const [t1, t2] = unzip(t);
        return [[h1, ...t1], [h2, ...t2]];
    }
}
