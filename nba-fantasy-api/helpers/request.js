const { config } = require("../config");

const BASE_URL =
  "https://fantasy.espn.com/apis/v3/games/fba/seasons/2023/segments/0/leagues/653588803";
const GOOGLE_API_BASE_URL = "https://api.apispreadsheets.com/data";
const baseHeaderProps = {
  Cookie: `SWID="{${config.SWID}}"; espn_s2="${config.ESPN_S2}"`,
  withCredentials: true,
};

exports.requestHelpers = {
  BASE_URL: BASE_URL,
  GOOGLE_API_BASE_URL: GOOGLE_API_BASE_URL,
  baseHeaderProps: baseHeaderProps,
};
