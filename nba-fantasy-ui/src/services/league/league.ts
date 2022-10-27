import api from "../api";
import { SCORES_API_ENDPOINT } from "../api";
import { BASE_URL } from "../../config";

export const getCurrentMatchupPeriod = async () => {
  const response = await api.get(
    `${BASE_URL}${SCORES_API_ENDPOINT}/currentMatchupPeriod`
  );
  return response.data;
};
