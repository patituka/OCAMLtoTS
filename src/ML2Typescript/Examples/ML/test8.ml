
let rec map (f: 'a -> 'b) (l: 'a list): 'b list =
  
  let rec map2 acc l =
    match l with
    | [] -> 
      acc
    | (hd :: tl) -> 
      (map2 ((f hd) :: acc) tl)
    
  in
  (map2 [] l);;
