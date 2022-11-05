import { useState, useMemo, useRef, useEffect } from "react";
import {
  StyledPaper,
  StyledTable,
  StyledTableHead,
  StyledNameCell,
  StyledImage,
  StyledTableCell,
} from "./MatchUpTable.styles";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { PointsTotalTableProps } from "./types";
import { TableLoadingSkeleton } from "../../../../components";
import autoAnimate from "@formkit/auto-animate";
import numeral from "numeral";
import { evaluateResult } from "../../../../utils";

const h2hCategories = [
  "pts",
  "blk",
  "stl",
  "ast",
  "reb",
  "to",
  "3pm",
  "fgPercentage",
  "ftPercentage",
];

export const MatchUpTable = ({ selectedTeam, scores, isLoading }: any) => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const columns: any[] = [
    {
      id: "name",
      label: "Name",
      align: "left",
      minWidth: 170,
    },
    {
      id: "matchUpResultAgainstSelectedTeam",
      label: "Score",
      align: "right",
    },
    {
      id: "fgPercentage",
      label: "FGA",
      align: "right",
      format: (value: number) => numeral(value).format("0.000%"),
    },
    {
      id: "ftPercentage",
      label: "FGM",
      align: "right",
      format: (value: number) => numeral(value).format("0.000%"),
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
      format: (value: number) => numeral(value).format("0,0"),
    },
  ];

  const test = scores.map((score: any) => {
    const matchUpResult = h2hCategories.reduce(
      (acc, stat): any => {
        const result = evaluateResult(selectedTeam[stat], score[stat]);

        return {
          ...acc,
          [result]: acc[result] + 1,
        };
      },
      {
        win: 0,
        loss: 0,
        draw: 0,
      }
    );
    return {
      ...score,
      matchUpResult,
      matchUpResultAgainstSelectedTeam: `${matchUpResult.win}-${matchUpResult.loss}-${matchUpResult.draw}`,
    };
  });

  return (
    <div>
      <StyledPaper>
        <TableContainer>
          {isLoading ? (
            <TableLoadingSkeleton />
          ) : (
            <StyledTable stickyHeader aria-label="sticky table">
              <StyledTableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </StyledTableHead>
              <TableBody ref={parent}>
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={selectedTeam.id}
                >
                  {columns.map((column) => {
                    const value = selectedTeam[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
                {test.map((row: any) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        const handleResults = () => {
                          if (column.id === "name") {
                            return "none";
                          } else if (
                            column.id === "matchUpResultAgainstSelectedTeam"
                          ) {
                            if (
                              row["matchUpResult"]["win"] ===
                              row["matchUpResult"]["loss"]
                            ) {
                              return "draw";
                            } else {
                              return row["matchUpResult"]["win"] >
                                row["matchUpResult"]["loss"]
                                ? "win"
                                : "loss";
                            }
                          } else {
                            return evaluateResult(
                              selectedTeam[column.id],
                              value
                            );
                          }
                        };
                        return (
                          <StyledTableCell
                            key={column.id}
                            align={column.align}
                            result={handleResults()}
                          >
                            {column.id === "name" ? (
                              <StyledNameCell>
                                <StyledImage src={row.logo} />
                                <Typography>{row.name}</Typography>
                              </StyledNameCell>
                            ) : column.format && typeof value === "number" ? (
                              column.format(value)
                            ) : (
                              value
                            )}
                          </StyledTableCell>
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
