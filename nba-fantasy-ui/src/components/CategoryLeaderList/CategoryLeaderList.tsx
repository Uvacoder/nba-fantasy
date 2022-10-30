import { CategoryLeader } from "../CategoryLeader";
import {
  StyledCategoryLeaderList,
  StyledHeading,
  StyledList,
} from "./CategoryLeaderList.styles";
import { CategoryLeaderListProps, Category } from "./types";
import { profilePhotoMap } from "./helpers";

export const CategoryLeaderList = ({
  categoryLeaders,
}: CategoryLeaderListProps) => {
  return (
    <StyledCategoryLeaderList>
      <StyledHeading variant="h5" align="center">
        Category leaders
      </StyledHeading>
      <StyledList>
        {categoryLeaders.map(({ id, stat, total }: Category) => (
          <CategoryLeader
            profilePhoto={profilePhotoMap[id]}
            stat={stat}
            total={total}
          />
        ))}
      </StyledList>
    </StyledCategoryLeaderList>
  );
};
