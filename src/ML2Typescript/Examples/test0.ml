let compose (f : 'a -> 'b) (g : 'b -> 'c) : 'a -> 'c = fun (x : 'a) -> (g (f x))
;;

let id : 'a -> 'a = fun (x : 'a) -> x
;;
