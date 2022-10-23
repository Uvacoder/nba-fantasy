import api from "../api";
import { TEAMS_API_ENDPOINT } from "../../config";

export const getTeams = async () => {
  const response = await api.get(TEAMS_API_ENDPOINT, {});
  return response.data.team;
};
