import { Skeleton } from "@mui/material";
import { TableLoadingSkeletonWithoutWrapper } from "../../../../components";
import {
  StyledCategoriesLoadingSkeleton,
  StyledCategoryLeaders,
  StyledCard,
  StyledAvatarSkelton,
} from "./CategoriesLoadingSkeleton.styles";

export const CategoriesLoadingSkeleton = () => {
  return (
    <StyledCategoriesLoadingSkeleton>
      <StyledCategoryLeaders>
        {Array.from(Array(7).keys()).map((key) => (
          <StyledCard key={key}>
            <StyledAvatarSkelton variant="circular" width={100} height={100} />
            <Skeleton variant="rectangular" width={90} height={20} />
          </StyledCard>
        ))}
      </StyledCategoryLeaders>
      <TableLoadingSkeletonWithoutWrapper />
    </StyledCategoriesLoadingSkeleton>
  );
};

export default CategoriesLoadingSkeleton;
