export function length<A>(arr: A[]): number {
    return arr.length
}
export function filter<A, B>(f: (_:A) => boolean, arr: A[]): A[] {
    return arr.filter(f)
}
export function map<A, B>(f: (_:A) => B, arr: A[]): B[] {
    return arr.map(f)
}
export function mapi<A, B>(f: (n: number, a: A) => B, arr: A[]): B[] {
    return arr.map((a: A, n: number) => f(n, a))
}
export function nth<A>(arr: A[], n: number): A {
    return arr[n]
}
export function fold_left<A, B>(f: (a: A, b: B) => A, init: A, arr: B[]): A {
    return arr.reduce(f, init)
}
export function init<A>(l: number, f: (n: number) => A): A[] {
    return Array.from({length: l}, (_: A, i: number) => f(i));
}

