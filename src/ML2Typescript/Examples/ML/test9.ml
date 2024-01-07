
type ('a, 'b) tree =
    | Leaf of 'a
    | Node of 'b * ('a, 'b) tree * ('a, 'b) tree

let max1 = (fun (x: int) (y: int) -> 
    if (x > y) then
      x
    else 
      y
    
  );;
let max2: int -> int -> int = (fun (x: int) (y: int) -> 
    if (x > y) then
      x
    else 
      y
    
  );;

let rec max (x: int) (y: int): int =
  if (x > y) then
    x
  else 
    y
  ;;

let rec max4 x y =
  if (x > y) then
    x
  else 
    y
  ;;

let rec max6 z =
  let (x, y) = z in
  if (x > y) then
    x
  else 
    y
  ;;

let rec first (z: ('a * 'b)): 'a =
  let (x, y) = z in
  x;;

let rec size (t: (int, string) tree): int =
  match t with
  | Leaf (a) -> 
    1
  | Node (x, l, r) -> 
    (1 + (max (size l) (size r)))
  ;;

let rec simple (t: (int, string) tree): bool =
  match t with
  | Leaf (a) -> 
    true
  | _ -> 
    false
  ;;

let rec compose (f: 'a -> 'b) (g: 'b -> 'c): 'a -> 'c =
  (fun (x: 'a) -> 
    (g (f x))
  );;

let rec succ (x: int): int =
  (x + 1);;

let rec string_of_int (x: int): string =
  (Stdlib.string_of_int x);;
let f = (compose succ string_of_int);;
let l: (int, string) tree = Leaf 2;;
let t = Node("ok", Leaf 3, Leaf 5);;
let _ = (print_int (size t));;
