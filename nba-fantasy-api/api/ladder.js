const express = require("express");
const router = express.Router();
const axios = require("axios");
const { config } = require("../config");
const { requestHelpers } = require("../helpers/request");

router.get("/ladder", async (req, res) => {
  try {
    const weeklyRotoWinnerResponse = await axios.get(
      `${requestHelpers.GOOGLE_API_BASE_URL}${config.WEEKLY_ROTO_ENDPOINT}`
    );
    const teamResponse = await axios.get(
      `${requestHelpers.GOOGLE_API_BASE_URL}${config.TEAMS_ENDPOINT}`
    );

    const teamNames = teamResponse.data.data.reduce(
      (acc, team) => ({ ...acc, [team.id]: team.name }),
      {}
    );

    const totals = weeklyRotoWinnerResponse.data.data.reduce((acc, winner) => {
      return {
        ...acc,
        [teamNames[winner.owner_id]]: acc[winner.owner_id]
          ? acc[winner.owner_id] + 1
          : 1,
      };
    }, {});

    return res.json(totals);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
