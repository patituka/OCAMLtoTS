import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

function length<A>(l: A[]): number {
    if (l.length == 0) {
        return 0;
    } else {
        const [, ...t] = l;
        return (1 + length(t));
    }
}

function concat<A>(l1: A[], l2: A[]): A[] {
    if (l1.length == 0) {
        return l2;
    } else {
        const [h, ...t] = l1;
        return [h, ...concat(t, l2)];
    }
}

function map<B, A>(f: (_: A) => B, l: A[]): B[] {
    if (l.length == 0) {
        return [];
    } else {
        const [hd, ...tl] = l;
        return [f(hd), ...map(f, tl)];
    }
}

function list_to_string(l: string[]): string {
    if (l.length == 0) {
        return "";
    } else {
        const [hd, ...tl] = l;
        return (hd + (" " + list_to_string(tl)));
    }
}

function string_of_int(i: number): string {
    return i.toString();
}

function print_list(l: number[]): void {
    return console.log(list_to_string(map(string_of_int, l)));
}
const l1 = [5, 4, 3, 2, 1];
const l2 = [6, 7, 8, 9, 0];
print_list([...l1, ...l2]);
const r = concat(l1, l2);
console.log(length(r));
print_list(r);
const s = list_to_string(map(string_of_int, r));
console.log(s);
const o = some(3);

function isSome<A>(o: Option<A>): boolean {
    switch (o.tag) {
        case 'none':
            return false;
        case 'some':
            const { content: [v] } = o;
            return true;
    }
}

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
