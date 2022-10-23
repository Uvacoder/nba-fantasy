const express = require("express");
const router = express.Router();
const axios = require("axios");
var _ = require("lodash/core");

// "https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/49712983?seasonId=2021"
const espn_s2 =
  "AEC0dX7sZsktqNGB3J6i4u7Cqnc%2B2P6lEGNe3WLBHq0ARvj%2By0eymTZqbLYOwzPtpjwMIJvgxMewDS5OSxB4XodBcMUPgAr1v%2FYI3peACweYvgIPWD2iKBLMIAH8VupRmtihW3lzJCb0sY%2FRXoTizGLd9QA6uzKKAJvcdobsqHJ9tyeVsLCHYO68VlvhdQTbbhAmKMQILGfXQbrbrkJz%2BHctr%2B3iecZ1%2F8yFnHAvcmm9vCfMfWwqWGutrM%2F0Ga8lhmiTRpyS9mrS1cfIJ2t9QmS2";

const SWID = "{F204CE4B-0969-4DDD-8BD0-33A0B47E3FF8}";

// Do work here
router.get("/api", async (req, res) => {
  try {
    const headers = {
      Cookie: `SWID=${SWID}; espn_s2=${espn_s2}`,
      withCredentials: true,
    };

    const response = await axios.get(
      "https://fantasy.espn.com/apis/v3/games/fba/seasons/2023/segments/0/leagues/653588803?view=mBoxscore&view=mMatchupScore&view=mRoster&view=mTeam",
      { headers }
    );

    console.log(response);
    return res.json(response.data);
  } catch (error) {
    return res.json(error);
  }

  return res.json("hey it works");
});

module.exports = router;
