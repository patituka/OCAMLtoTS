module App = {
  type convertAction =
    | CodeConverted(string)
    | CodeError;

  [@react.component]
  let make = () => {
    let (value, onChange) = React.useState(() => "");
    let (ocamlCode, setOcamlCode) = React.useState(() => "");

    let onSubmit = _event => setOcamlCode(_ => value);

    <div>
      <form onSubmit>
        <label>
          {React.string("Enter Ocaml code")}
          <input
            onChange={event => {
              let value = ReactEvent.Form.target(event)##value;
              onChange(_ => value);
            }}
            value
          />
        </label>
        <button> {React.string("Reset edits")} </button>
        <button type_="submit">
          {React.string("Convert to typescript")}
        </button>
      </form>
      <hr />
      <Code ocamlCode />
    </div>;
  };
};

ReactDOM.querySelector("#root")
->(
    fun
    | Some(root) => ReactDOM.render(<App />, root)
    | None =>
      Js.Console.error(
        "Failed to start React: couldn't find the #root element",
      )
  );
