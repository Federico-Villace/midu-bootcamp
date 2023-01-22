import { useDispatch } from "react-redux";
import { createNote } from "../../reducers/noteReducer";

export const AddNote = () => {
  const dispatch = useDispatch();

  const addNote = (e) => {
    e.preventDefault();
    const { target } = e;
    const content = target.note.value;
    target.note.value = "";
    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" style={{ marginRight: "10px" }} />
      <button>add note</button>
    </form>
  );
};
