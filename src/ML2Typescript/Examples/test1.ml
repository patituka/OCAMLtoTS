(* ok *)
let rec f (x : int) (y : bool) : int -> int =
 fun (z : int) -> if z = 0 then z + 1 else 3;;
