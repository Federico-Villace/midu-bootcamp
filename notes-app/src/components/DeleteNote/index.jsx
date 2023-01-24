import React from "react";
import { useDispatch } from "react-redux";

export const DeleteNote = () => {
  const dispatch = useDispatch();

  const addNote = (e) => {
    e.preventDefault();
    const { target } = e;
    const content = target.note.value;
    target.note.value = "";
    // dispatch(createNote(content));
  };

  return (
    <form>
      <button>Delete note</button>
    </form>
  );
};
