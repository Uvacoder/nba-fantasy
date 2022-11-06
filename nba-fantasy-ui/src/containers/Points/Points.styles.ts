import styled from "styled-components";
import {
  CategoriesLoadingSkeleton,
  PointsTable,
  MatchUpDropdown,
  Cat,
  Roto,
} from "./components";

export const StyledCategories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const StyledNavigation = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const StyledCatIcon = styled(Cat)<{ isactive: boolean }>`
  width: 50px;
  height: 50px;
  fill: ${({ isactive }) => (isactive ? "#2196f3" : "black")};
  animation: fill 600s ease-in-out;
  cursor: pointer;
`;

export const StyledRotoIcon = styled(Roto)<{ isactive: boolean }>`
  width: 50px;
  height: 50px;
  fill: ${({ isactive }) => (isactive ? "#2196f3" : "black")};
  animation: fill 600s ease-in-out;
  cursor: pointer;
`;
