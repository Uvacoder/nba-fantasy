const express = require("express");
const router = express.Router();
const axios = require("axios");
const { requestHelpers } = require("../helpers/request");

router.get("/currentMatchupPeriod", async (req, res) => {
  try {
    const { data } = await axios.get(requestHelpers.BASE_URL, {
      headers: requestHelpers.baseHeaderProps,
    });

    return res.json(data.status.currentMatchupPeriod);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
