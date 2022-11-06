import { CategoryLeader } from "../CategoryLeader";
import {
  StyledCategoryLeaderList,
  StyledList,
} from "./CategoryLeaderList.styles";
import { CategoryLeaderListProps, Category } from "./types";
import { profilePhotoMap } from "./helpers";

export const CategoryLeaderList = ({
  categoryLeaders,
}: CategoryLeaderListProps) => {
  return (
    <StyledCategoryLeaderList>
      <StyledList>
        {categoryLeaders.map(({ id, stat, total }: Category) => (
          <CategoryLeader
            key={stat}
            profilePhoto={profilePhotoMap[id]}
            stat={stat}
            total={total}
          />
        ))}
      </StyledList>
    </StyledCategoryLeaderList>
  );
};
