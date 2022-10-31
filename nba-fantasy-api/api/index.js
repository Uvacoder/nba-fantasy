const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");
const helpers = require("../helpers/index");
const lodash = require("lodash");
const string = require("../helpers/string");

const BASE_URL =
  "https://fantasy.espn.com/apis/v3/games/fba/seasons/2023/segments/0/leagues/653588803";

router.get("/currentMatchupPeriod", async (req, res) => {
  try {
    const headers = {
      Cookie: `SWID="{${process.env.SWID}}"; espn_s2="${process.env.ESPN_S2}"`,
      withCredentials: true,
    };

    const response = await axios.get(BASE_URL, {
      headers,
    });

    return res.json(response.data.status.currentMatchupPeriod);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/categories", async (req, res) => {
  try {
    const headers = {
      Cookie: `SWID="{${process.env.SWID}}"; espn_s2="${process.env.ESPN_S2}"`,
      withCredentials: true,
    };

    const params = qs.stringify(
      {
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

    const response = await axios.get(
      `https://fantasy.espn.com/apis/v3/games/fba/seasons/2023/segments/0/leagues/653588803?${params}`,
      { headers }
    );

    const teams = response.data.teams.map((team) => {
      const valuesByStat = Object.keys(team.valuesByStat).reduce(
        (acc, stat) => {
          return { ...acc, [helpers.statMap[stat]]: team.valuesByStat[stat] };
        },
        {}
      );

      return {
        id: team.id,
        name: `${team.location} ${team.nickname}`,
        logo: team.logo,
        ...valuesByStat,
      };
    });

    const trackedHighestStats = [
      "pts",
      "blk",
      "stl",
      "ast",
      "reb",
      "3pm",
      "fgPercentage",
      "ftPercentage",
    ];
    const trackedLowestStats = ["to"];

    const highestTotalStats = trackedHighestStats.map((stat) => {
      const team = lodash.maxBy(teams, (o) => {
        return o[stat];
      });
      return {
        stat: string.statLabel[stat],
        id: team.id,
        total: team[stat],
      };
    });

    const lowestTotalStats = trackedLowestStats.map((stat) => {
      const team = lodash.minBy(teams, (o) => {
        return o[stat];
      });
      return {
        stat: string.statLabel[stat],
        id: team.id,
        total: team[stat],
      };
    });

    const data = {
      teams: teams,
      categoryLeaders: [...highestTotalStats, ...lowestTotalStats],
    };

    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/weeklyMatchUp", async (req, res) => {
  const matchupPeriodId = req.query.matchupPeriodId;
  try {
    const headers = {
      Cookie: `SWID="{${process.env.SWID}}"; espn_s2="${process.env.ESPN_S2}"`,
      withCredentials: true,
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
