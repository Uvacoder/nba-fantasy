import api from "../api";
import { TEAMS_API_ENDPOINT } from "../api";
import { BASE_URL } from "../../config";

export const getTeams = async ({
  scoringPeriodId,
}: {
  scoringPeriodId?: string;
}) => {
  const response = await api.get(`${BASE_URL}${TEAMS_API_ENDPOINT}`, {
    params: { scoringPeriodId },
  });
  return response.data.teams;
};
