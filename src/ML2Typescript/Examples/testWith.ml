type point = { x: int; y: int }

let pt = { x = 3; y = 5 };;

let init (z: int): point = { x = z; y = z };;

let pt2 = { pt with y = 9 };;

let pt3 = { (init 10) with x = 10 };;

let _ = print_int pt.y;;

let _ = print_int pt2.y;;

let _ = print_int pt3.y;;
