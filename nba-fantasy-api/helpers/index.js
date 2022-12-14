exports.statMap = {
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

exports.statPointConversion = {
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

exports.matchupPeriodIdMap = {
  1: 7,
  2: 0,
  3: 15,
  4: 22,
  5: 29,
  6: 36,
  7: 43,
  8: 50,
  9: 57,
  10: 64,
  11: 71,
  12: 78,
  13: 85,
  14: 92,
  15: 99,
  16: 106,
  17: 113,
  18: 120,
  19: 134,
  20: 141,
};

exports.emptyStats = {
  pts: 0,
  blk: 0,
  stl: 0,
  ast: 0,
  reb: 0,
  to: 0,
  fgm: 0,
  fga: 0,
  ftm: 0,
  fta: 0,
  "3pm": 0,
  fgPercentage: 0,
  ftPercentage: 0,
};
