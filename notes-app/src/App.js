import { AddNote } from "./components/AddNote";
import { Notes } from "./components/Notes";

export const App = () => {
  const filterSelected = (value) => {
    console.log(value);
  };

  return (
    <div>
      <div>
        <h2>Notes</h2>
        <AddNote />
      </div>
      <div>
        all
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("ALL")}
        />
        important
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("IMPORTANT")}
        />
        notImportant
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("NOT_IMPORTANT")}
        />
      </div>
      <div>
        <Notes />
      </div>
    </div>
  );
};
