import api from "../api";
import { SCORES_API_ENDPOINT } from "../api";
import { BASE_URL } from "../../config";

export const getScores = async ({
  matchupPeriodId,
}: {
  matchupPeriodId: number;
}) => {
  const { data } = await api.get(
    `${BASE_URL}${SCORES_API_ENDPOINT}/weeklyMatchUp`,
    {
      params: { matchupPeriodId },
    }
  );

  return data;
};
