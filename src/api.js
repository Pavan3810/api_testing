import axios from "axios";

const API = axios.create({
  baseURL: "http://10.1.152.30:5000/api",
});

export default API;
