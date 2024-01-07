
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
let l1 = [5; 4; 3; 2; 1];;
let l2 = [6; 7; 8; 9; 0];;
let r = (concat l1 l2);;
