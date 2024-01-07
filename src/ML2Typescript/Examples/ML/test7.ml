
type 'a myList =
    | MyNil
    | MyCons of 'a * 'a myList


type colour =
    | Red
    | Black
    | White


type ('a, 'b) tree =
    | Leaf of 'a
    | Node of 'b * ('a, 'b) tree * ('a, 'b) tree


type point = { x: int; y: int }

type ('a, 'b) pair = { fst: 'a; snd: 'b }
let p: (int, string) pair = { fst = 4; snd = "something" };;
let p1 = p.fst;;
let p2 = p.snd;;

let rec a (): int =
  match p with { fst = f } -> f;;

let rec b (): string =
  match p with { fst = f; snd = s } -> s;;

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
let t: (int, string) tree = Node("abc", Leaf 7, Leaf (size l));;
