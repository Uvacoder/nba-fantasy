import {
  StyledCategoriesLoadingSkeleton,
  StyledCard,
  StyledAvatarSkelton,
} from "./CategoriesLoadingSkeleton.styles";
import { Skeleton } from "@mui/material";

export const CategoriesLoadingSkeleton = () => {
  return (
    <StyledCategoriesLoadingSkeleton>
      {Array.from(Array(7).keys()).map(() => (
        <StyledCard>
          <StyledAvatarSkelton variant="circular" width={100} height={100} />
          <Skeleton variant="rectangular" width={90} height={20} />
        </StyledCard>
      ))}
    </StyledCategoriesLoadingSkeleton>
  );
};

export default CategoriesLoadingSkeleton;
