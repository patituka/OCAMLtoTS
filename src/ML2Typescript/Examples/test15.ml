let rec maFonction (z:int) = z;;
let hello = maFonction 3;;

let rec unzip(l: ('a * 'b) list): ('a list * 'b list) =
match l with
| [] -> ([], [])
| (h :: t) ->
  let (h1, h2) = h in
  let (t1, t2) = unzip t in
  (h1 :: t1, h2 :: t2);;

()
