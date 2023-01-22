import { AddNote } from "./components/AddNote";
import { FilteredReducers } from "./components/FilteredReducers";
import { Notes } from "./components/Notes";

export const App = () => {
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
