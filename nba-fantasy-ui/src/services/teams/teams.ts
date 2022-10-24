import api from "../api";
import { TEAMS_API_ENDPOINT } from "../api";
import { BASE_URL } from "../../config";

export const getTeams = async () => {
  console.log(BASE_URL);
  const response = await api.get(`${BASE_URL}${TEAMS_API_ENDPOINT}`, {});
  return response.data.teams;
};
