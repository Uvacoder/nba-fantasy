import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

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
    format: (value: number) => value.toLocaleString("en-US"),
  },
  { id: "fta", label: "FTA", align: "right" },
  {
    id: "ftm",
    label: "FTM",
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "3pm",
    label: "3PM",
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "reb",
    label: "REB",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "ast",
    label: "AST",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "stl",
    label: "STL",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "blk",
    label: "BLK",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "to",
    label: "TO",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "pts",
    label: "PTS",
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "totalPoints",
    label: "TOTAL",
    align: "right",
    format: (value: number) => value,
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
  console.log(teams);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={team.name}>
                  {columns.map((column: any) => {
                    const value = team[column.id];

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
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
  );
};
