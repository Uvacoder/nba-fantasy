const express = require("express");
const router = express.Router();
const axios = require("axios");

const statMap = {
  0: "pts",
  1: "blk",
  2: "stl",
  3: "ast",
  6: "reb",
  11: "to",
  13: "fgm",
  14: "fga",
  15: "ftm",
  16: "fta",
  17: "3pm",
  19: "fgPercentage",
  20: "ftPercentage",
};

const statPointConversion = {
  pts: 1,
  blk: 4,
  stl: 4,
  ast: 2,
  reb: 1,
  to: -2,
  fgm: 2,
  fga: -1,
  ftm: 1,
  fta: -1,
  "3pm": 1,
  fgPercentage: 0,
  ftPercentage: 0,
};

router.get("/", async (req, res) => {
  try {
    const headers = {
      Cookie: `SWID="{${process.env.SWID}}"; espn_s2="${process.env.ESPN_S2}"`,
      withCredentials: true,
    };

    const response = await axios.get(
      "https://fantasy.espn.com/apis/v3/games/fba/seasons/2023/segments/0/leagues/653588803?scoringPeriodId=7&view=modular&view=mNav&view=mMatchupScore&view=mScoreboard&view=mSettings&view=mTopPerformers&view=mTeam",
      { headers }
    );

    const formattedData = response.data.teams.map((team) => {
      const totalPoints = Object.keys(team.valuesByStat).reduce(
        (acc, value) => {
          return (
            acc + statPointConversion[statMap[value]] * team.valuesByStat[value]
          );
        },
        0
      );

      const valuesByStat = Object.keys(team.valuesByStat).reduce(
        (acc, stat) => {
          return { ...acc, [statMap[stat]]: team.valuesByStat[stat] };
        },
        {}
      );

      return {
        name: `${team.location} ${team.nickname}`,
        logo: team.logo,
        totalPoints,
        ...valuesByStat,
      };
    });

    return res.json(formattedData);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
