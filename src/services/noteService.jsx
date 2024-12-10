import axios from "axios";

const NOTE_API_BASE_URL = process.env.NOTE_API;

const getAllPublish = async () => {
  const response = await axios.get(NOTE_API_BASE_URL + "/publish");
  const jsonBody = response.data;
  return jsonBody.code === 100 ? jsonBody.data.map((note) => note.content) : [];
};

export default { getAllPublish };
