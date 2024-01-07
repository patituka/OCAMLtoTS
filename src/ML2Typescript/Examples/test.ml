let rec f1 (x : int) : int = x * 2
let rec f2 (x : int) (y : int) : int = if x < y then x else y
let rec f3 (x : int) : int -> int =
  fun (y : int) -> if x < y then x else y
let rec f4 (f : int -> bool) (g : bool -> string) : int -> string = fun (x : int) -> g (f x)
let rec f5 (f : 'a -> 'b) (g : 'b -> 'c) : 'a -> 'c = fun (x : 'a) -> g (f x)