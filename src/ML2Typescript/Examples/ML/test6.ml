
type 'a myList =
    | MyNil
    | MyCons of 'a * 'a myList


type colour =
    | Red
    | Black
    | White


type ('a, 'c) tree =
    | Leaf of 'a
    | Node of 'c * ('a, 'c) tree * ('a, 'c) tree


let rec toInt (c: colour): int =
  match c with
  | Red -> 
    0
  | Black -> 
    1
  | White -> 
    2
  ;;

let rec length (l: 'a myList): int =
  match l with
  | MyNil -> 
    0
  | MyCons (h, t) -> 
    (1 + (length t))
  ;;

let rec max (x: int) (y: int): int =
  if (x > y) then
    x
  else 
    y
  ;;

let rec size (t: ('a, 'b) tree): int =
  match t with
  | Leaf (a) -> 
    1
  | Node (x, l, r) -> 
    (max (size l) (size r))
  ;;
let c = Red;;
let l: (int, string) tree = Leaf 3;;
let t = Node("abc", Leaf 7, Leaf (size l));;
