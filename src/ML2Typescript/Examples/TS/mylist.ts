import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

type MyList<A> =
    | { tag: 'nil' }
    | { tag: 'cons', content: [A, MyList<A>] }

function nil<A>(): MyList<A> {
    return { tag: 'nil' };
}
function cons<A>(arg1: A, arg2: MyList<A>): MyList<A> {
    return { tag: 'cons', content: [arg1, arg2] };
}


function length<A>(l: MyList<A>): number {
    switch (l.tag) {
        case 'nil':
            return 0;
        case 'cons':
            const { content: [h, t] } = l;
            return (1 + length(t));
    }
}

function toArray<A>(l: MyList<A>): A[] {
    switch (l.tag) {
        case 'nil':
            return [];
        case 'cons':
            const { content: [h, t] } = l;
            return [h, ...toArray(t)];
    }
}

function fromArray<A>(l: A[]): MyList<A> {
    if (l.length == 0) {
        return nil();
    } else {
        const [h, ...t] = l;
        return cons(h, fromArray(t));
    }
}
const l = fromArray(['a', 'b', 'c', 'd', 'e']);
toArray(l);
