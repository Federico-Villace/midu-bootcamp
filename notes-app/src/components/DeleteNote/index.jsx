import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../services/notes";

export const DeleteNote = () => {
  const dispatch = useDispatch();

  const delNote = (e) => {
    e.preventDefault();
    const { target } = e;
    const id = target.note;
    console.log(id);
    target.note.value = "";
    dispatch(deleteNote(id));
  };

  return (
    <form onSubmit={delNote}>
      <button>Delete note</button>
    </form>
  );
};
