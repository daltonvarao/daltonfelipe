import axios from "axios";

const baseURL = process.env.API_URL || "https://daltonfelipe.vercel.app/api";

const api = axios.create({ baseURL });

export default api;
