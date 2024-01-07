type state = {
  tsCode: string,
  loading: bool,
};

type action =
  | Converted(string)
  | Clear
  | Loading;

let initialState = {tsCode: "", loading: false};

[@react.component]
let make = (~ocamlCode: string) => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Loading => {...state, loading: true}
        | Clear => initialState
        | Converted(data) => {tsCode: data, loading: false}
        },
      initialState,
    );

  React.useEffect1(
    () => {
      Service.fetchTsCode(ocamlCode, payload =>
        dispatch(Converted(payload))
      );
      dispatch(Loading);

      None;
    },
    [|ocamlCode|],
  );

  <div>
    <h3> {React.string("typeScript code")} </h3>
    <p> {React.string(state.tsCode)} </p>
  </div>;
};
