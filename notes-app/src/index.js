import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { noteReducer } from "./reducers/noteReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import styles from "./styles/global.css";
import { filterReducer } from "./reducers/filterReducer";

const rootReducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
