import { useEffect, useState } from "react";
import { getScores, getCurrentMatchupPeriod } from "../../services";
import {
  CategoryTotals,
  LoadingSkeleton,
  PointsTotalTable,
  CategoryTable,
  CategoryLeaderList,
} from "../../components";
import { StyledCategories } from "./Categories.styles";
import { categoryLeaders } from "./data";

export const Categories = () => {
  console.log(categoryLeaders);
  return (
    <StyledCategories>
      <CategoryLeaderList categoryLeaders={categoryLeaders} />
      {/* <CategoryTotals /> */}
    </StyledCategories>
  );
};

export default Categories;
