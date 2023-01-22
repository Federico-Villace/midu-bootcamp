import { noteReducer } from "./reducers/noteReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { filterReducer } from "./reducers/filterReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

export const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools()
);
