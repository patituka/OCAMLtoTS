let rec length (l : 'a list) : int =
  match l with
  | [] -> 0
  | h :: t -> 1 + (length t)
;;

let rec empty (l : 'a list) : bool =
  match l with
  | [] -> true
  | _ :: _ -> false
;;

let l2 = 1 :: 2 :: 3 :: [];;
