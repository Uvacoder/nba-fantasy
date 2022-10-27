import api from "../api";
import { SCORES_API_ENDPOINT } from "../api";
import { BASE_URL } from "../../config";

export const getScores = async ({
  matchupPeriodId,
}: {
  matchupPeriodId?: string;
}) => {
  const response = await api.get(
    `${BASE_URL}${SCORES_API_ENDPOINT}/weeklyMatchUp`,
    {
      params: { matchupPeriodId },
    }
  );
  return response.data.teams;
};
