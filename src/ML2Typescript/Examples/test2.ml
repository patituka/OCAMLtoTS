let rec concat (l1 : int list) (l2 : int list) : int list =
  match l1 with
  | [] -> l2
  | h :: t -> h :: (concat t l2);;

let x = [5; 4];;
let y = [8; 9; 10];;

let r = (concat x y);;
