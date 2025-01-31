open Ast

(* TODO: fill in the missing cases. *)
let rec string_of_typ (t : typ) =
  match t with
  | Any -> failwith "'Any' unexpected"
  | Unit -> "unit"
  | Int -> "int"
  | Bool -> "boolean"
  | Char -> "string"
  | List t -> string_of_typ t ^ "[]"
  | _ -> failwith "Unsupported feature in typ"

(* TODO: fill in the missing cases. *)
let rec string_of_exp (e: exp): string =
  match e with
  | Empty -> "()"
  | Var x -> x
  | IntCst i -> string_of_int i
  | Plus (e1, e2) -> "(" ^ (string_of_exp e1) ^ " + " ^ (string_of_exp e2) ^ ")"
  | Times (e1, e2) -> "(" ^ (string_of_exp e1) ^ " * " ^ (string_of_exp e2) ^ ")"
  | Minus (e1, e2) -> "(" ^ (string_of_exp e1) ^ " - " ^ (string_of_exp e2) ^ ")"
  | Equal (e1, e2) -> "(" ^ (string_of_exp e1) ^ " = " ^ (string_of_exp e2) ^ ")"
  | Less (e1, e2) -> "(" ^ (string_of_exp e1) ^ " < " ^ (string_of_exp e2) ^ ")"
  | Let (x, e1, c2) -> "let " ^ x ^ " = " ^  (string_of_exp e1) ^ " in " ^ (string_of_exp c2)
  | IfThenElse (b,c1,c2) -> "if " ^ (string_of_exp b) ^ " then " ^ (string_of_exp c1) ^ " else " ^ (string_of_exp c2)
  | ExpRegion (e1, r) -> (try (string_of_exp e1) with Failure msg -> Error.fail r msg)
  | e1 -> failwith "Unsupported feature in exp"

(* TODO: fill in the missing cases. *)
let rec string_of_full_prog name c =
  match c with
  | Body e -> string_of_exp e
  | ProgRegion (c1, r) -> (try (string_of_full_prog name c1) with Failure msg -> Error.fail r msg)
  | _ -> failwith "Unsupported feature in prog"
