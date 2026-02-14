import axios from "axios";
import { env } from "../config/env";

export const axiosInstance = axios.create({
  baseURL: env.API_URL,
  headers: { "Content-Type": "application/json" },
});
