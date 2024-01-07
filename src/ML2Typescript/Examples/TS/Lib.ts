export type Option<A> =
    | { tag: 'none', content: [] }
    | { tag: 'some', content: [A] }

export function none<A>(): Option<A> {
    return { tag: 'none', content: [] }
}
export function some<A, B>(arg: A): Option<A> {
    return { tag: 'some', content: [arg] }
}
