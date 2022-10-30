import { useEffect, useState } from "react";
import { getCategories } from "../../services";
import {
  CategoriesLoadingSkeleton,
  CategoryTable,
  CategoryLeaderList,
} from "./components";
import { StyledCategories, StyledHeading } from "./Categories.styles";

export const Categories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<any>([]);

  console.log("Categories");

  useEffect(() => {
    console.log("useEffect");
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await getCategories();
        console.log(response);
        setCategories(response);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // console.log(categories);
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
          <CategoryTable teams={categories.teams} />
        </>
      )}
    </StyledCategories>
  );
};

export default Categories;
