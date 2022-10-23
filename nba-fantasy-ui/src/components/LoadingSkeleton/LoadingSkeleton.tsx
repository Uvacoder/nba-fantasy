import { StyledLoadingSkeleton } from "./LoadingSkeleton.styles";
import { Avatar, Typography } from "@mui/material";
import loading from "../../assets/loading-dribble.gif";

export const LoadingSkeleton = () => {
  return (
    <StyledLoadingSkeleton>
      <Typography variant="h3" align="center" mb={4}>
        Loading
      </Typography>
      <img src={loading} alt="" />
    </StyledLoadingSkeleton>
  );
};

export default LoadingSkeleton;
