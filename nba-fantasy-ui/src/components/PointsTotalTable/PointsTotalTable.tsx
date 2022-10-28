import { MatchUpDropdown } from "../MatchUpDropdown";
import { StyledNameCell, StyledImage } from "./PointsTotalTable.styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import numeral from "numeral";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

interface Column {
  id:
    | "name"
    | "fgPercentage"
    | "ftPercentage"
    | "3pm"
    | "reb"
    | "ast"
    | "stl"
    | "blk"
    | "to"
    | "pts"
    | "total";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns = [
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

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

export const PointsTotalTable = ({
  scores,
  onChangeMatchUpWeek,
  currentMatchUpWeek,
  isLoading,
}: {
  scores: any;
  onChangeMatchUpWeek: (number: number) => void;
  currentMatchUpWeek: number;
  isLoading: boolean;
}) => {
  console.log(scores);
  return (
    <div>
      <MatchUpDropdown
        currentMatchUpWeek={currentMatchUpWeek}
        onChangeMatchUpWeek={onChangeMatchUpWeek}
      />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          {isLoading ? (
            <>
              <TableHead>
                <TableRow>
                  {columns.map((column: any) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <Stack spacing={1}>
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
                <Skeleton variant="rectangular" height={40} />
              </Stack>
            </>
          ) : (
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column: any) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {scores.map((score: any) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={score.name}
                    >
                      {columns.map((column: any) => {
                        const value = score[column.id];

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "name" ? (
                              <StyledNameCell>
                                <StyledImage src={score.logo} />
                                {value}
                              </StyledNameCell>
                            ) : column.format && typeof value === "number" ? (
                              column.format(value)
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
            </Table>
          )}
        </TableContainer>
      </Paper>
    </div>
  );
};
