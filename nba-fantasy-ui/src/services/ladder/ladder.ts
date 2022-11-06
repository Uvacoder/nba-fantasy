import api from "../api";
import { SCORES_API_ENDPOINT } from "../api";
import { BASE_URL } from "../../config";

export const getLadder = async (): Promise<any> => {
  const { data } = await api.get(`${BASE_URL}${SCORES_API_ENDPOINT}/ladder`);

  return data;
};
