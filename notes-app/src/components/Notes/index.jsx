import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../../reducers/noteReducer";

export const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
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
