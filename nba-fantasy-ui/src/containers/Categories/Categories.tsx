import { useEffect, useState } from "react";
import { getCategories } from "../../services";
import {
  CategoriesLoadingSkeleton,
  CategoryTable,
  CategoryLeaderList,
  CategoryTableHead,
} from "./components";
import { StyledCategories, StyledHeading } from "./Categories.styles";
import { teams } from "../../utils/mockData";

export const Categories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<any>([]);
  const [currentTableTotals, setCurrentTableTotals] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const loadData = async () => {
      try {
        const response = await getCategories();

        setCategories(response);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <StyledCategories>
      <StyledHeading variant="h5" align="center">
        Category leaders
      </StyledHeading>
      {isLoading ? (
        <CategoriesLoadingSkeleton />
      ) : (
        <>
          <CategoryLeaderList categoryLeaders={categories.categoryLeaders} />
          <CategoryTableHead
            currentTableTotals={currentTableTotals}
            onChangeTableTotals={setCurrentTableTotals}
          />
          <CategoryTable
            key={currentTableTotals}
            teams={teams}
            hasRankings={currentTableTotals === 2}
          />
        </>
      )}
    </StyledCategories>
  );
};
