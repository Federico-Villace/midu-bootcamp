import { useDispatch, useSelector } from "react-redux";
import {delNote, toggleImportanceOf } from "../../reducers/noteReducer";
import { DeleteNote } from "../DeleteNote";


export const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  const deleteNote = (id) => {
    dispatch(delNote(id))
  }



  return (
    <div>
      <ul>
        {notes.map((note) => {
          return (
            <div key={note.id}> 
              <li
                style={{ cursor: "pointer" }}
                onClick={() => toggleImportant(note.id)}
              >
                <p>{note.content}</p>
                <strong>{note.important ? "important" : "not important"}</strong>
              </li>
              <div>
                <DeleteNote onClick={() => deleteNote}/>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
