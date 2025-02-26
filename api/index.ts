import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "X-API-KEY": process.env.NEXT_PUBLIC_X_API_KEY,
  },
});

export default instance;
