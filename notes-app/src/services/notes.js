import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

export const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const createNewNote = async (content) => {
  const note = { content, important: false };
  const res = await axios.post(baseUrl, note);
  return res.data;
};

export const deleteNote = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, id);
  return response.data;
};

