import { createNote, toggleImportanceOf } from "./reducers/noteReducer";

export const App = ({ store }) => {
  const addNote = (e) => {
    e.preventDefault();
    const { target } = e;
    const content = target.note.value;
    target.note.value = "";
    store.dispatch(createNote(content));
  };

  const toggleImportant = (id) => {
    store.dispatch(toggleImportanceOf(id));
  };
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
