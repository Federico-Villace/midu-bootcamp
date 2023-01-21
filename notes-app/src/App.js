import { createNote, toggleImportanceOf } from "./reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const addNote = (e) => {
    e.preventDefault();
    const { target } = e;
    const content = target.note.value;
    target.note.value = "";
    dispatch(createNote(content));
  };

  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button>add note</button>
      </form>
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
