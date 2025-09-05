import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // 👈 mesma porta do back
});

export default api;

