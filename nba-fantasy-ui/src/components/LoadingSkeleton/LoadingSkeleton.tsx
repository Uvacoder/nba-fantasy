import {
  StyledLoadingSkeleton,
  StyledTypography,
  StyledImageContainer,
  StyledImage,
} from "./LoadingSkeleton.styles";
import { Typography } from "@mui/material";
import loading from "../../assets/loading-dribble.gif";
import { funFacts, randomInteger } from "../../utils";

export const LoadingSkeleton = () => {
  return (
    <StyledLoadingSkeleton>
      <StyledTypography align="center" mb={1}>
        Did you know?
      </StyledTypography>
      <Typography align="center" mb={4}>
        {funFacts[randomInteger({ max: funFacts.length })]}
      </Typography>
      <StyledImageContainer>
        <StyledImage src={loading} alt="" />
      </StyledImageContainer>
    </StyledLoadingSkeleton>
  );
};

export default LoadingSkeleton;
