
let rec valeur_abs (x: int): int =
  if (not (x > 0)) then
    x
  else 
    (0 - x)
  ;;
let r = (valeur_abs 5);;
