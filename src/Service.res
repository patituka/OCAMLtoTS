

@module("main/Main.js")
external translate:  (bool, string) => string = "translate"

let fetchTsCode = (ocamlCode: string, callback) => {
  let tsCode = translate(false, ocamlCode);
  Js.log(tsCode);
  callback(tsCode);
}


