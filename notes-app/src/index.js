import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";

const generateId = () => Math.floor(Math.random() * 999999) + 1;

const store = configureStore({ reducer: noteReducer });

const addNote = (e) => {
  e.preventDefault();
  const { target } = e;
  const content = target.note.value;
  target.note.value = "";
  store.dispatch({
    type: "@notes/created",
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  });
};

const App = () => {
  const state = store.getState();
  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button>add note</button>
      </form>
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
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
