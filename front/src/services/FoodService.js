import axios from "../axiosConfig";

const getAll = () => {
  return axios.get("/food");
};

const get = id => {
  return axios.get(`/food/${id}`);
};

const create = data => {
  return axios.post("/food", data);
};

const update = (id, data) => {
  return axios.put(`/food/${id}`, data);
};

const remove = id => {
  return axios.delete(`/food/${id}`);
};

const removeAll = () => {
  return axios.delete(`/food`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};
