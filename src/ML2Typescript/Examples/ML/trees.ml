
type ('a, 'b) tree =
    | Leaf of 'a
    | Node of 'b * ('a, 'b) tree * ('a, 'b) tree


let rec max (x: int) (y: int): int =
  if (x > y) then
    x
  else 
    y
  ;;

let rec size (t: (int, string) tree): int =
  match t with
  | Leaf (a) -> 
    1
  | Node (x, l, r) -> 
    (1 + (max (size l) (size r)))
  ;;
let t = Node("ok", Leaf 3, Leaf 5);;
let _ = (print_int (size t));;
