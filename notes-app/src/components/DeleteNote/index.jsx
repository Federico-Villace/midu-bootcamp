import React from "react";
import { useDispatch } from "react-redux";
import { delNote } from "../../reducers/noteReducer";
import { getAll } from "../../services/notes";

export const DeleteNote = () => {
  const dispatch = useDispatch();

  const deleteNote = async (e) => {
    e.preventDefault();
    const [note] = await getAll()
    const {id} = note 
    dispatch(delNote(id));
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  };

  return (
    <form onSubmit={deleteNote}>
      <button>Delete note</button>
    </form>
  );
};
