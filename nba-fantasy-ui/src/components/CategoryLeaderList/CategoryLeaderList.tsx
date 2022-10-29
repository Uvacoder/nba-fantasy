import { CategoryLeader } from "../CategoryLeader";
import {
  StyledCategoryLeaderList,
  StyledHeading,
  StyledList,
} from "./CategoryLeaderList.styles";
import { profilePhotoMap } from "./helpers";

export const CategoryLeaderList = ({ categoryLeaders }: any) => {
  return (
    <StyledCategoryLeaderList>
      <StyledHeading variant="h3" align="center">
        Category leaders
      </StyledHeading>
      <StyledList>
        {categoryLeaders.map((category: any) => (
          <CategoryLeader
            profilePhoto={profilePhotoMap[category.id]}
            stat={category.stat}
            total={category.total}
          />
        ))}
      </StyledList>
    </StyledCategoryLeaderList>
  );
};
