const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");
const helpers = require("../helpers/index");
const { requestHelpers } = require("../helpers/request");

router.get("/weeklyMatchUp", async (req, res) => {
  const matchupPeriodId = req.query.matchupPeriodId;
  try {
    const headers = {
      ...requestHelpers.baseHeaderProps,
      "x-fantasy-filter": JSON.stringify({
        schedule: {
          filterMatchupPeriodIds: { value: [matchupPeriodId] },
        },
      }),
    };

    const params = qs.stringify(
      {
        scoringPeriodId: helpers.matchupPeriodIdMap[matchupPeriodId],
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
          id: team.id,
          name: `${team.location} ${team.nickname}`,
          logo: team.logo,
        },
      }),
      {}
    );

    const hasBeenPlayed =
      matchupPeriodId <= response.data.status.currentMatchupPeriod;

    const weeklyStats = response.data.schedule
      .reduce((acc, matchup) => {
        const homeStats =
          matchup["home"]["cumulativeScore"]["scoreByStat"] ||
          helpers.emptyStats;
        const awayStats =
          matchup["away"]["cumulativeScore"]["scoreByStat"] ||
          helpers.emptyStats;
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
      }, [])
      .sort((a, b) => b.totalPoints - a.totalPoints);

    const emptyStats = Object.keys(teams).map((teamId) => {
      return {
        ...teams[teamId],
        ...helpers.emptyStats,
        totalPoints: 0,
      };
    });

    const data = hasBeenPlayed ? weeklyStats : emptyStats;

    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
