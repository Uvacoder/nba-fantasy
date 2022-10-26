import {
  StyledLoadingSkeleton,
  StyledImage,
  StyledTypography,
} from "./LoadingSkeleton.styles";
import loading from "../../assets/loading-dribble.gif";

export const LoadingSkeleton = () => {
  return (
    <StyledLoadingSkeleton>
      <StyledTypography variant="h4" align="center" mb={4}>
        Loading
      </StyledTypography>
      <StyledImage src={loading} alt="" />
    </StyledLoadingSkeleton>
  );
};

export default LoadingSkeleton;
