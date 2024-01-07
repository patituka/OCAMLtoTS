
let rec length (l: 'a list): int =
  match l with
  | [] -> 
    0
  | (h :: t) -> 
    (1 + (length t))
  ;;
let x = 3;;
let f: 'a list -> int = (fun (l: 'a list) -> 
    (length l)
  );;
let l: int list = [5; 4; 3; 2; 1];;
