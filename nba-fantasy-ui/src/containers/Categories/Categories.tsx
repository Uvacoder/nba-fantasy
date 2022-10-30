import { useEffect, useState } from "react";
import { getScores, getCurrentMatchupPeriod } from "../../services";
import {
  LoadingSkeleton,
  PointsTotalTable,
  CategoryTable,
  CategoryLeaderList,
} from "../../components";
import { StyledCategories } from "./Categories.styles";
import { teams, categoryLeaders } from "./data";

export const Categories = () => {
  return (
    <StyledCategories>
      <CategoryLeaderList categoryLeaders={categoryLeaders} />
      <CategoryTable teams={teams} />
    </StyledCategories>
  );
};

export default Categories;
