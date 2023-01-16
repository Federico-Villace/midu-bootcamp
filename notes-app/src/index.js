import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state = 0, action) => {
  const { type } = action;
  switch (action.type) {
    case "@counter/incremented":
      return state + 1;
    case "@counter/decremented":
      return state - 1;
    case "@counter/reseted":
      return 0;
    default:
      return state;
  }
};

const store = configureStore({ reducer: counterReducer });

const actionIncremented = {
  type: "@counter/incremented",
};

const actionDecremented = {
  type: "@counter/decremented",
};

const actionReset = {
  type: "@counter/reseted",
};

store.subscribe(() => {
  console.log(store.getState());
});

const App = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>{store.getState()}</div>
      <div>
        <p>buttons </p>
        <button onClick={() => store.dispatch(actionIncremented)}> + </button>
        <button onClick={() => store.dispatch(actionDecremented)}> - </button>
        <button onClick={() => store.dispatch(actionReset)}> Reset </button>
      </div>
    </div>
  );
};
const container = document.getElementById("root");

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
store.subscribe(() => {
  renderApp();
});
