import axios from "axios";
import { BASE_URL } from "../../config";

export const axiosInstance = axios.create();

export default axiosInstance;
