const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");
const helpers = require("../helpers/index");

const BASE_URL =
  "https://fantasy.espn.com/apis/v3/games/fba/seasons/2023/segments/0/leagues/653588803";

router.get("/total", async (req, res) => {
  try {
    const headers = {
      Cookie: `SWID="{${process.env.SWID}}"; espn_s2="${process.env.ESPN_S2}"`,
      withCredentials: true,
    };

    const response = await axios.get(
      `https://fantasy.espn.com/apis/v3/games/fba/seasons/2023/segments/0/leagues/653588803?view=modular&view=mNav&view=mMatchupScore&view=mScoreboard&view=mSettings&view=mTopPerformers&view=mTeam`,
      { headers, params: { scoringPeriodId: req.query.scoringPeriodId } }
    );

    const formattedData = response.data.teams.map((team) => {
      const totalPoints = Object.keys(team.valuesByStat).reduce(
        (acc, value) => {
          return (
            acc +
            helpers.statPointConversion[helpers.statMap[value]] *
              team.valuesByStat[value]
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
        id: team.id,
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

router.get("/weeklyMatchUp", async (req, res) => {
  try {
    const headers = {
      Cookie: `SWID="{${process.env.SWID}}"; espn_s2="${process.env.ESPN_S2}"`,
      withCredentials: true,
      "x-fantasy-filter": JSON.stringify({
        schedule: { filterMatchupPeriodIds: { value: [1] } },
      }),
    };

    const params = qs.stringify(
      {
        scoringPeriodId: req.query.scoringPeriodId,
        view: [
          "modular",
          "mNav",
          "mMatchupScore",
          "mScoreboard",
          "mSettings",
          "mTopPerformers",
          "mTeam",
        ],
      },
      { arrayFormat: "repeat" }
    );

    const response = await axios.get(`${BASE_URL}?${params}`, {
      headers,
    });

    const teams = response.data.teams.reduce(
      (acc, team) => ({
        ...acc,
        [team.id]: {
          name: `${team.location} ${team.nickname}`,
          logo: team.logo,
        },
      }),
      {}
    );

    const data = response.data.schedule.reduce((acc, matchup) => {
      const homeStats = matchup["home"]["cumulativeScore"]["scoreByStat"];
      const awayStats = matchup["away"]["cumulativeScore"]["scoreByStat"];
      const calculateTotalPoints = (stats) =>
        Object.keys(stats).reduce((acc, value) => {
          return (
            acc +
            helpers.statPointConversion[helpers.statMap[value]] *
              stats[value]["score"]
          );
        }, 0);
      const buildStats = (stats) =>
        Object.keys(stats).reduce((acc, stat) => {
          return {
            ...acc,
            [helpers.statMap[stat]]: stats[stat]["score"],
          };
        }, {});
      return [
        ...acc,
        {
          ...teams[matchup["away"]["teamId"]],
          ...buildStats(awayStats),
          totalPoints: calculateTotalPoints(awayStats),
        },
        {
          ...teams[matchup["home"]["teamId"]],
          ...buildStats(homeStats),
          totalPoints: calculateTotalPoints(homeStats),
        },
      ];
    }, []);

    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
