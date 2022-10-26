import { StyledCard } from "./PointsTotal.styles";
import { Avatar, Typography } from "@mui/material";
import { TeamCard } from "../TeamCard";
import { MatchUpDropdown } from "../MatchUpDropdown";

export const PointsTotal = ({ teams }: any) => {
  return (
    <>
      {/* <MatchUpDropdown /> */}
      {teams
        .sort((a: any, b: any) => b.totalPoints - a.totalPoints)
        .map((team: any) => {
          return <TeamCard team={team} />;
        })}
    </>
  );
};

export default PointsTotal;
