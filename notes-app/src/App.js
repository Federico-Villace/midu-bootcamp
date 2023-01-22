import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddNote } from "./components/AddNote";
import { FilteredReducers } from "./components/FilteredReducers";
import { Notes } from "./components/Notes";
import { initNotes } from "./reducers/noteReducer";
import { getAll } from "./services/notes";
import { store } from "./store";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAll().then((notes) => {
      dispatch(initNotes(notes));
    });
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2>Notes</h2>
        <AddNote />
      </div>
      <FilteredReducers />
      <div>
        <Notes />
      </div>
    </div>
  );
};
