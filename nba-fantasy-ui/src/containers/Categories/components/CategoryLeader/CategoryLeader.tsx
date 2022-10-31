import numeral from "numeral";
import { Typography } from "@mui/material";
import { StyledAvatar, StyledCategoryLeader } from "./CategoryLeader.styles";
import { CategoryLeaderProps } from "./types";

export const CategoryLeader = ({
  profilePhoto,
  stat,
  total,
}: CategoryLeaderProps) => {
  return (
    <StyledCategoryLeader>
      <StyledAvatar src={profilePhoto} />
      <Typography mb={1.5}>
        {stat} (
        {stat.includes("percentage")
          ? numeral(total).format("0.00%")
          : numeral(total).format("0,0")}
        )
      </Typography>
    </StyledCategoryLeader>
  );
};
