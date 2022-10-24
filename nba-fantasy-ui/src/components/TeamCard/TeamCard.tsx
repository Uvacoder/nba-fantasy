import { StyledCard } from "./TeamCard.styles";
import { Avatar, Typography } from "@mui/material";
import numeral from "numeral";

const statMap: any = {
  0: "PTS",
  1: "BLK",
  2: "STL",
  3: "AST",
  6: "REB",
  11: "TO",
  13: "FGM",
  14: "FGA",
  15: "FTM",
  16: "FTA",
  17: "3PM",
  19: "FG_PERCENTAGE",
  20: "FT_PERCENTAGE",
};

const statPointConversion: any = {
  PTS: 1,
  BLK: 4,
  STL: 4,
  AST: 2,
  REB: 1,
  TO: -2,
  FGM: 2,
  FGA: -1,
  FTM: 1,
  FTA: -1,
  "3PM": 1,
  FG_PERCENTAGE: 0,
  FT_PERCENTAGE: 0,
};

export const TeamCard = ({ team }: any) => {
  console.log(team);

  const totalPoints = Object.keys(team.valuesByStat).reduce(
    (acc, value): any => {
      return (
        acc + statPointConversion[statMap[value]] * team.valuesByStat[value]
      );
    },
    0
  );

  return (
    <StyledCard>
      <Avatar src={team.logo} />
      <Typography>
        {team.location} {team.nickname}
      </Typography>
      <Typography>
        Total points - {numeral(totalPoints).format("0,0")}
      </Typography>
    </StyledCard>
  );
};

export default TeamCard;
