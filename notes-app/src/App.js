import { AddNote } from "./components/AddNote";
import { Notes } from "./components/Notes";

export const App = () => {
  return (
    <div>
      <div>
        <h2>Notes</h2>
        <AddNote />
      </div>
      <div>
        <Notes />
      </div>
    </div>
  );
};
