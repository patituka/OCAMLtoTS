import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

function f(x: number, y: boolean): (_: number) => number {
    return (z: number) => {
        if (z == 0) {
            return (z + 1);
        } else {
            return 3;
        }
    };
}
