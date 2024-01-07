import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

function valeur_abs(x: number): number {
    if (!(x > 0)) {
        return x;
    } else {
        return (0 - x);
    }
}
const r = valeur_abs(5);
