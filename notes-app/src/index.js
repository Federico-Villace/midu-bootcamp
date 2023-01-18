import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";

const store = configureStore({ reducer: noteReducer });

store.dispatch({
  type: "@notes/created",
  payload: {
    content: "Testing on Midudevs course",
    important: true,
    id: 1,
  },
});

store.dispatch({
  type: "@notes/created",
  payload: {
    content: "Testing on Midudevs course",
    important: false,
    id: 2,
  },
});

const App = () => {
  const state = store.getState();
  return (
    <ul>
      {state.map((note) => {
        return (
          <li key={note.id}>
            <p>{note.content}</p>
            <strong>{note.important ? "important" : "not important"}</strong>
          </li>
        );
      })}
    </ul>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
