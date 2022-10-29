import { StyledAvatar, StyledCategoryLeader } from "./CategoryLeader.styles";
import { Typography } from "@mui/material";
import numeral from "numeral";

export const CategoryLeader = ({ profilePhoto, stat, total }: any) => {
  return (
    <StyledCategoryLeader>
      <StyledAvatar src={profilePhoto} />
      <Typography variant="h5">
        {stat} ({numeral(total).format("0,0")})
      </Typography>
    </StyledCategoryLeader>
  );
};
