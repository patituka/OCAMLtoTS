type 'a myList =
  | Nil
  | Cons of 'a * 'a myList

let rec length (l : 'a myList) : int =
  match l with
  | Nil -> 0
  | Cons (h, t) -> 1 + (length t)

let rec toArray (l : 'a myList) : 'a list =
  match l with
  | Nil -> []
  | Cons (h, t) -> h :: (toArray t)

let rec fromArray (l : 'a list) : 'a myList =
  match l with
  | [] -> Nil
  | (h :: t) -> Cons(h, (fromArray t))

let l = fromArray([ 'a'; 'b'; 'c'; 'd'; 'e' ])

let _ = toArray(l)