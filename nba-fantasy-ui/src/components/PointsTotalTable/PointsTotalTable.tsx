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

export const PointsTotalTable = ({ teams }: any) => {
  return (
    <div>
      {" "}
      <MatchUpDropdown />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
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
              {teams.map((team: any) => {
                console.log(team);
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={team.name}>
                    {columns.map((column: any) => {
                      const value = team[column.id];

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "name" ? (
                            <StyledNameCell>
                              <StyledImage src={team.logo} />
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
        </TableContainer>
      </Paper>
    </div>
  );
};
