import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { noteReducer } from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: noteReducer });

const renderApp = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

renderApp();
store.subscribe(renderApp);
