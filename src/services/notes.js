import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

const create = (newObject) => {
  const req = axios.post(baseUrl, newObject);
  return req.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
};
