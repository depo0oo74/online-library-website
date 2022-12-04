import axios from "axios";
const TOKEN = window.localStorage.getItem("accessToken") ?? null;
const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const ApiServices = {
  get(URL) {
    return axios.get(URL, { headers });
  },
  post(URL, data) {
    return axios.post(URL, data, { headers });
  },
  put(URL, data) {
    return axios.put(URL, data, { headers });
  },
  delete(URL) {
    return axios.delete(URL, { headers });
  },
};

export default ApiServices;
