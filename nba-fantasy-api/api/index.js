const express = require("express");
const router = express.Router();
const axios = require("axios");

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

    return res.json(response.data);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
