
type ('a, 'b) tree =
    | Leaf of 'a
    | Node of 'b * ('a, 'b) tree * ('a, 'b) tree


let rec max (x: int) (y: int): int =
  if (x > y) then
    x
  else 
    y
  ;;

let rec size (t: (int, bool) tree): int =
  match t with
  | Leaf (a) -> 
    1
  | Node (x, l, r) -> 
    (max (size l) (size r))
  ;;

let rec length (l: 'a list): int =
  match l with
  | [] -> 
    0
  | (h :: t) -> 
    (1 + (length t))
  ;;

let rec concat (l1: 'a list) (l2: 'a list): 'a list =
  match l1 with
  | [] -> 
    l2
  | (h :: t) -> 
    (h :: (concat t l2))
  ;;

let rec first (z: ('a * 'b)): 'a =
  let (x, y) = z in
  x;;

let rec f5 (f: 'a -> 'b) (g: 'b -> 'c): 'a -> 'c =
  (fun (x: 'a) -> 
    (g (f x))
  );;

let rec combine (l1: 'a list) (l2: 'b list): ('a * 'b) list =
  match l1 with
  | [] -> 
    []
  | (h1 :: t1) -> 
    match l2 with
    | [] -> 
      []
    | (h2 :: t2) -> 
      ((h1, h2) :: (combine t1 t2))
    
  ;;

let rec split (l: ('a * 'b) list): ('a list * 'b list) =
  match l with
  | [] -> 
    ([], [])
  | (h :: t) -> 
    let (l1, l2) = (split t) in
    let (h1, h2) = h in
    ((h1 :: l1), (h2 :: l2))
  ;;
let l2 = [1; 3; 5; 7];;
let l3 = [(2, 1); (7, 2)];;
let l4: (string * int) list = [("e", 1); ("kjh", 2)];;
let l: int list = [];;
