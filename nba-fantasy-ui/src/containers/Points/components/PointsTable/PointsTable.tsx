import {
  StyledPaper,
  StyledTable,
  StyledNameCell,
  StyledImage,
} from "./PointsTable.styles";
import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { PointsTotalTableProps, Score, Column, ColumnIds } from "./types";
import { TableHead, TableLoadingSkeleton } from "../../../../components";
import { columns } from "../../../../components/Table/helpers";

export const PointsTable = ({ scores, isLoading }: PointsTotalTableProps) => {
  return (
    <div>
      <StyledPaper>
        <TableContainer>
          {isLoading ? (
            <TableLoadingSkeleton />
          ) : (
            <StyledTable stickyHeader aria-label="sticky table">
              <TableHead />
              <TableBody>
                {scores.map((score: Score) => {
                  return (
                    <TableRow hover tabIndex={-1} key={score.name}>
                      {columns.map(({ id, align, format }: Column) => {
                        const value = score[id as ColumnIds];

                        return (
                          <TableCell key={id} align={align}>
                            {id === "name" ? (
                              <StyledNameCell>
                                <StyledImage src={score.logo} />
                                {value}
                              </StyledNameCell>
                            ) : format && typeof value === "number" ? (
                              format(value)
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </StyledTable>
          )}
        </TableContainer>
      </StyledPaper>
    </div>
  );
};
