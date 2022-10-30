import { StyledPaper, StyledTableHead, StyledSkeleton } from "./Table.styles";
import { Stack, TableCell, TableRow, TableContainer } from "@mui/material";
import { columns } from "./helpers";
import { Column } from "../../containers/Points/components/PointsTable/types";

export const TableHead = () => {
  return (
    <StyledTableHead>
      <TableRow>
        {columns.map(({ id, align, minWidth, label }: Column) => (
          <TableCell key={id} align={align} style={{ minWidth: minWidth }}>
            {label}
          </TableCell>
        ))}
      </TableRow>
    </StyledTableHead>
  );
};

export const TableLoadingSkeleton = () => (
  <>
    <TableHead />
    <Stack>
      {Array.from(Array(10).keys()).map(() => (
        <StyledSkeleton variant="rectangular" height={74} />
      ))}
    </Stack>
  </>
);

export const TableLoadingSkeletonWithoutWrapper = () => (
  <StyledPaper>
    <TableContainer>
      <TableLoadingSkeleton />
    </TableContainer>
  </StyledPaper>
);
