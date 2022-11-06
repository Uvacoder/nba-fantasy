require("dotenv").config({ path: "variables.env" });

exports.config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  ESPN_S2: process.env.ESPN_S2,
  SWID: process.env.SWID,
  WEEKLY_ROTO_ENDPOINT: process.env.WEEKLY_ROTO_ENDPOINT,
  TEAMS_ENDPOINT: process.env.TEAMS_ENDPOINT,
};
