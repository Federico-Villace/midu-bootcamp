import { toggleImportanceOf } from "./reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";
import { AddNote } from "./components/AddNote";

export const App = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <AddNote />
      <ul>
        {notes.map((note) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              key={note.id}
              onClick={() => toggleImportant(note.id)}
            >
              <p>{note.content}</p>
              <strong>{note.important ? "important" : "not important"}</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
