import {
  StyledCategoryTableHead,
  StyleTypography,
} from "./CategoryTableHead.styles";
import { CategoryTableDropdown } from "../index";
import { CategoryTableHeadProps } from "./types";

export const CategoryTableHead = ({
  currentTableTotals,
  onChangeTableTotals,
}: CategoryTableHeadProps) => {
  return (
    <StyledCategoryTableHead>
      <StyleTypography variant="h5">Total statistics</StyleTypography>
      <CategoryTableDropdown
        currentTableTotals={currentTableTotals}
        onChangeTableTotals={onChangeTableTotals}
      />
    </StyledCategoryTableHead>
  );
};
