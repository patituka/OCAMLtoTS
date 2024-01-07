
let rec length (l: 'a list): int =
  match l with
  | [] -> 
    0
  | (_ :: t) -> 
    (1 + (length t))
  ;;

let rec concat (l1: 'a list) (l2: 'a list): 'a list =
  match l1 with
  | [] -> 
    l2
  | (h :: t) -> 
    (h :: (concat t l2))
  ;;

let rec map (f: 'a -> 'b) (l: 'a list): 'b list =
  match l with
  | [] -> 
    []
  | (hd :: tl) -> 
    ((f hd) :: (map f tl))
  ;;

let rec list_to_string (l: string list): string =
  match l with
  | [] -> 
    ""
  | (hd :: tl) -> 
    (hd ^ (" " ^ (list_to_string tl)))
  ;;

let rec string_of_int (i: int): string =
  (Stdlib.string_of_int i);;

let rec print_list (l: int list): unit =
  (print_string (list_to_string (map string_of_int l)));;
let l1 = [5; 4; 3; 2; 1];;
let l2 = [6; 7; 8; 9; 0];;
let _ = (print_list (l1 @ l2));;
let r = (concat l1 l2);;
let _ = (print_int (length r));;
let _ = (print_list r);;
let s = (list_to_string (map string_of_int r));;
let _ = (print_string s);;
let o = Some 3;;

let rec isSome (o: 'a option): bool =
  match o with
  | None -> 
    false
  | Some (v) -> 
    true
  ;;

let rec unzip (l: ('a * 'b) list): ('a list * 'b list) =
  match l with
  | [] -> 
    ([], [])
  | (h :: t) -> 
    let (h1, h2) = h in
    let (t1, t2) = (unzip t) in
    ((h1 :: t1), (h2 :: t2))
  ;;
