import { Option, none, some } from './Lib.js';
import * as ArrayList from './ArrayList.js';

function map<B, A>(f: (_: A) => B, l: A[]): B[] {
    
    function map2(acc: any, l: any): any {
        if (l.length == 0) {
            return acc;
        } else {
            const [hd, ...tl] = l;
            return map2([f(hd), ...acc], tl);
        }
    }
    return map2([], l);
}
