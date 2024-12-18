import axios from "axios";

// const NOTE_API_BASE_URL = process.env.NOTE_API;
const NOTE_API_BASE_URL = "http://localhost:8081/api/notes";

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

const updateNoteContent = async (noteId, updateContent) => {
  const response = await axios.put(NOTE_API_BASE_URL + "/content/" + noteId, {
    update_content: updateContent,
  });
  return response.data.code === 100;
};

export default { getAllPublish, getAllDraft, getAllHidding, getAllRecycle, updateNoteContent };
