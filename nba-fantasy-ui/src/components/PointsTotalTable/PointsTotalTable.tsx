import {
  StyledPaper,
  StyledTable,
  StyledTableHead,
  StyledNameCell,
  StyledImage,
  StyledSkeleton,
} from "./PointsTotalTable.styles";
import {
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import numeral from "numeral";
import { PointsTotalTableProps, Score, Column, ColumnIds } from "./types";

const columns: Column[] = [
  { id: "name", label: "Name", align: "left", minWidth: 170 },
  { id: "fga", label: "FGA", align: "right" },
  {
    id: "fgm",
    label: "FGM",
    align: "right",
  },
  { id: "fta", label: "FTA", align: "right" },
  {
    id: "ftm",
    label: "FTM",
    align: "right",
  },
  {
    id: "3pm",
    label: "3PM",
    align: "right",
  },
  {
    id: "reb",
    label: "REB",
    align: "right",
  },
  {
    id: "ast",
    label: "AST",
    align: "right",
  },
  {
    id: "stl",
    label: "STL",
    align: "right",
  },
  {
    id: "blk",
    label: "BLK",
    align: "right",
  },
  {
    id: "to",
    label: "TO",
    align: "right",
  },
  {
    id: "pts",
    label: "PTS",
    align: "right",
  },
  {
    id: "totalPoints",
    label: "TOTAL",
    align: "right",
    format: (value: number) => numeral(value).format("0,0"),
  },
];

export const PointsTotalTable = ({
  scores,
  isLoading,
}: PointsTotalTableProps) => {
  const tableHead = () => {
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

  return (
    <div>
      <StyledPaper>
        <TableContainer>
          {isLoading ? (
            <>
              {tableHead()}
              <Stack>
                {Array.from(Array(10).keys()).map(() => (
                  <StyledSkeleton variant="rectangular" height={74} />
                ))}
              </Stack>
            </>
          ) : (
            <StyledTable stickyHeader aria-label="sticky table">
              {tableHead()}
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
