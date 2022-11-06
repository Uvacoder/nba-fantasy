const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");
const helpers = require("../helpers/index");
const lodash = require("lodash");
const string = require("../helpers/string");
const { requestHelpers } = require("../helpers/request");

router.get("/categories", async (req, res) => {
  try {
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
      { headers: requestHelpers.baseHeaderProps }
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

    const highestStatRankings = trackedHighestStats.reduce((acc, stat) => {
      return {
        ...acc,
        [stat]: teams.sort((a, b) => b[stat] - a[stat]).map((team) => team.id),
      };
    }, {});

    const lowestStatRankings = trackedLowestStats.reduce((acc, stat) => {
      return {
        ...acc,
        [stat]: teams.sort((a, b) => a[stat] - b[stat]).map((team) => team.id),
      };
    }, {});

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
      teams: teams.map((team) => {
        return {
          ...team,
          statRankings: {
            ...trackedHighestStats.reduce(
              (acc, stat) => ({
                ...acc,
                [stat]: highestStatRankings[stat].indexOf(team.id) + 1,
              }),
              {}
            ),
            ...trackedLowestStats.reduce(
              (acc, stat) => ({
                ...acc,
                [stat]: lowestStatRankings[stat].indexOf(team.id) + 1,
              }),
              {}
            ),
          },
        };
      }),
      categoryLeaders: [...highestTotalStats, ...lowestTotalStats],
    };

    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
