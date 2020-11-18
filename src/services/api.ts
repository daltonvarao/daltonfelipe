import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.API_URL
    : "http://localhost:3000/api";

const api = axios.create({ baseURL });

export default api;
