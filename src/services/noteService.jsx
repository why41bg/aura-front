import axios from "axios";

const NOTE_API_BASE_URL = process.env.NOTE_API;

const getAllPublish = async () => {
  const response = await axios.get(NOTE_API_BASE_URL + "/publish");
  const jsonBody = response.data;
  return jsonBody.code === 100 ? jsonBody.data : [];
};

const getAllDraft = async () => {
  const response = await axios.get(NOTE_API_BASE_URL + "/draft");
  const jsonBody = response.data;
  return jsonBody.code === 100 ? jsonBody.data : [];
};

const getAllHidding = async () => {
  const response = await axios.get(NOTE_API_BASE_URL + "/hiding");
  const jsonBody = response.data;
  return jsonBody.code === 100 ? jsonBody.data : [];
};

const getAllRecycle = async () => {
  const response = await axios.get(NOTE_API_BASE_URL + "/recycle");
  const jsonBody = response.data;
  return jsonBody.code === 100 ? jsonBody.data : [];
};

const updateNoteContent = async (noteId, content) => {
  const response = await axios.put(NOTE_API_BASE_URL + "/content/" + noteId, {
    content: content,
  });
  return response.data.code === 100;
};

const updateNoteState = async (noteId, state) => {
  const response = await axios.put(NOTE_API_BASE_URL + "/state/" + noteId, {
    state: state,
  });
  return response.data.code === 100;
};

const logicalDeleteNote = async (noteId) => {
  const response = await axios.delete(NOTE_API_BASE_URL + "/" + noteId);
  return response.data.code === 100;
};

const createNote = async (content) => {
  const response = await axios.post(NOTE_API_BASE_URL + "/", {
    content: content,
  });
  return response.data.code === 100;
};

export default { getAllPublish, getAllDraft, getAllHidding, getAllRecycle, updateNoteContent, updateNoteState, logicalDeleteNote, createNote };
