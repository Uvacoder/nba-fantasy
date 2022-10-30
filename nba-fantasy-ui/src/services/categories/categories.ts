import api from "../api";
import { SCORES_API_ENDPOINT } from "../api";
import { BASE_URL } from "../../config";

export interface Category {
  id: string;
  stat: string;
  total: number;
}

export interface Score {
  "3pm": number;
  ast: number;
  blk: number;
  fgPercentage: number;
  fga: number;
  fgm: number;
  fta: number;
  ftm: number;
  logo: string;
  name: string;
  pts: number;
  reb: number;
  stl: number;
  to: number;
  totalPoints: number;
}

export const getCategories = async (): Promise<{
  categoryLeaders: Category[];
  teams: Score[];
}> => {
  const { data } = await api.get(
    `${BASE_URL}${SCORES_API_ENDPOINT}/categories`
  );

  return data;
};
