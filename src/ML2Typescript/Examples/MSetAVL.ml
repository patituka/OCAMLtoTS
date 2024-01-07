type comparaison =
  | Eq
  | Lt
  | Gt

type 'a tree =
  | Empty
  | Node of int * 'a tree * 'a * 'a tree

let check (res: int): comparaison =
  if res = 0 then Eq
  else (if res < 0 then Lt else Gt);;

let max (i: int) (j: int): int =
  if i > j then i else j;;

let getOrElse (opt: 'a option) (other: 'a): 'a =
  match opt with
  | None -> other
  | Some v -> v;;

let is_empty (t: 'a tree) : bool = match t with
  | Empty -> true
  | Node (_, _, _, _) -> false;;

let rec mem (x: 'a) (t: 'a tree) (cmp: ('a -> 'a -> int)): bool =
  match t with
  | Empty -> false
  | Node (_, l, k, r) ->
    (match (check (cmp x k)) with
     | Eq -> true
     | Lt -> (mem x l cmp)
     | Gt -> (mem x r cmp));;

let rec find (x: 'a) (t: 'a tree) (cmp: ('a -> 'a -> int)): 'a option =
  match t with
  | Empty -> None
  | Node (_, l, k, r) ->
    (match (check (cmp x k)) with
     | Eq -> Some k
     | Lt -> (find x l cmp)
     | Gt -> (find x r cmp));;

let rec min_elt (t: 'a tree): 'a option = match t with
  | Empty -> None
  | Node (_, l, x, _) ->
    (match l with
     | Empty -> Some x
     | Node (_, _, _, _) -> (min_elt l));;

let rec max_elt (t: 'a tree): 'a option = match t with
  | Empty -> None
  | Node (_, _, x, r) ->
    (match r with
     | Empty -> Some x
     | Node (_, _, _, _) -> (max_elt r));;

let height (t: 'a tree): int = match t with
  | Empty -> 0
  | Node (h, _, _, _) -> h;;

let rec size (t: 'a tree): int = match t with
  | Empty -> 0
  | Node (h, l, _, r) -> (size l) + (size r) + 1;;

let create (l:'a tree) (x: 'a) (r: 'a tree): 'a tree =
  Node ((max (height l) (height r)) + 1, l, x, r);;

let leaf (x: 'a): 'a tree = (create Empty x Empty);;

let bal (l:'a tree) (x: 'a) (r: 'a tree): 'a tree =
  let hl: int = (height l) in
  let hr: int = (height r) in
  if (hr + 2) < hl
  then (match l with
      | Empty -> raise Exit
      | Node (_, ll, lx, lr) ->
        if (height lr) <= (height ll)
        then (create ll lx (create lr x r))
        else (match lr with
            | Empty -> raise Exit
            | Node (_, lrl, lrx, lrr) ->
              (create (create ll lx lrl) lrx (create lrr x r))))
  else if (hl + 2) < hr
  then (match r with
      | Empty -> raise Exit
      | Node (_, rl, rx, rr) ->
        if (height rl) <= (height rr)
        then (create (create l x rl) rx rr)
        else (match rl with
            | Empty -> raise Exit
            | Node (_, rll, rlx, rlr) ->
              (create (create l x rll) rlx (create rlr rx rr))))
  else (create l x r);;

let rec add (x:'a) (t: 'a tree) (cmp: ('a -> 'a -> int)): 'a tree =
  match t with
  | Empty -> (leaf x)
  | Node (h, l, y, r) ->
    (match (check (cmp x y)) with
     | Eq -> (create l y r)
     | Lt -> (bal (add x l cmp) y r)
     | Gt -> (bal l y (add x r cmp)));;

let rec remove_min (l: 'a tree) (x:'a) (r: 'a tree): ('a tree * 'a) =
  match l with
  | Empty -> (r,x)
  | Node (_, ll, lx, lr) ->
    let (l2, m) = (remove_min ll lx lr) in ((bal l2 x r),m);;

let merge (s1: 'a tree) (s2: 'a tree): 'a tree =
  match s1 with
  | Empty -> s2
  | Node (_, _, _, _) ->
    (match s2 with
     | Empty -> s1
     | Node (_, l2, x2, r2) ->
       let (s3, m) = (remove_min l2 x2 r2) in (bal s1 m s3));;

let rec remove (x: 'a) (t: 'a tree) (cmp: ('a -> 'a -> int)): 'a tree =
  match t with
  | Empty -> Empty
  | Node (_, l, y, r) ->
    (match (check (cmp x y)) with
     | Eq -> (merge l r)
     | Lt -> (bal (remove x l cmp) y r)
     | Gt -> (bal l y (remove x r cmp)));;

let rec toList (t: 'a tree): 'a list =
  match t with
  | Empty -> []
  | Node (_, l, y, r) -> (toList l) @ (y :: (toList r));;
