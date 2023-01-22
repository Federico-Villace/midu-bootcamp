export const noteReducer = (state = [], action) => {
  if (action.type === "@notes/init") {
    return action.payload;
  }

  if (action.type === "@notes/created") {
    return [...state, action.payload];
  }

  if (action.type === "@notes/toggle_importance") {
    const { id } = action.payload;
    return state.map((note) => {
      if (note.id === id) {
        return { ...note, important: !note.important };
      }
      return note;
    });
  }

  return state;
};

export const createNote = (content) => {
  return {
    type: "@notes/created",
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  };
};

export const toggleImportanceOf = (id) => {
  return {
    type: "@notes/toggle_importance",
    payload: {
      id,
    },
  };
};

export const initNotes = (notes) => {
  return {
    type: "@notes/init",
    payload: notes,
  };
};

export const generateId = () => Math.floor(Math.random() * 999999) + 1;
