import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

type Point = {x: number, y: number}
const pt = { x: 3, y: 5 };

function init(z: number): Point {
    return { x: z, y: z };
}
const pt2 = { ...pt, y: 9 };
const pt3 = { ...init(10), x: 10 };
console.log(pt.y);
console.log(pt2.y);
console.log(pt3.y);
