open Ast

(* TODO: fill in the missing cases. *)
let rec string_of_typ (t : typ) =
  match t with
  | Any -> "any"
  | Unit -> "void"
  | Int -> "number"
  | Bool -> "boolean"
  | Char -> "string"
  | List t -> string_of_typ t ^ "[]"
  | _ -> failwith "unsupported feature in typ"

(* TODO: fill in the missing cases. *)
let rec string_of_exp (e: exp): string =
  match e with
  | Empty -> "undefined" (* of type void *)
  | Var x -> x
  | IntCst i -> string_of_int i
  | Plus (e1, e2) -> "(" ^ (string_of_exp e1) ^ " + " ^ (string_of_exp e2) ^ ")"
  | Times (e1, e2) -> "(" ^ (string_of_exp e1) ^ " * " ^ (string_of_exp e2) ^ ")"
  | Minus (e1, e2) -> "(" ^ (string_of_exp e1) ^ " - " ^ (string_of_exp e2) ^ ")"
  | Equal (e1, e2) -> "(" ^ (string_of_exp e1) ^ " = " ^ (string_of_exp e2) ^ ")"
  | Less (e1, e2) -> "(" ^ (string_of_exp e1) ^ " < " ^ (string_of_exp e2) ^ ")"
  | IfThenElse (b, e1, e2) -> (string_of_exp b) ^ " ? " ^ (string_of_exp e1) ^ " : " ^ (string_of_exp e2)
  | ExpRegion (e1, r) -> (try (string_of_exp e1) with Failure msg -> Error.fail r msg)
  | _ -> failwith "unsupported feature in exp"

(* TODO: fill in the missing cases. *)
and string_of_comm (c: comm): string =
  match c with
  | Empty -> ""
  | Let (x, e1, c2) -> "const " ^ x ^ " = " ^  (string_of_exp e1) ^ ";\n" ^ (string_of_comm c2)
  | IfThenElse (b, c1, c2) -> "if (" ^ (string_of_exp b) ^ "){\n" ^ "return " ^ (string_of_exp c1) ^ ";\n" ^ "else {\n" ^ (string_of_exp c2) ^ ";\n}"
    | ExpRegion (e1, r) -> (try (string_of_comm e1) with Failure msg -> Error.fail r msg)
  | e1 -> "return " ^ (string_of_exp e1)

(* TODO: fill in the missing cases. *)
let rec string_of_full_prog name c =
  match c with
  | Body e -> string_of_comm e
  | ProgRegion (c1, r) -> (try (string_of_full_prog name c1) with Failure msg -> Error.fail r msg)
  | _ -> failwith "unsupported feature in prog"
