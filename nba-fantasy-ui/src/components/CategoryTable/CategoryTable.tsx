import { useState, useMemo, useRef, useEffect } from "react";
import {
  StyledPaper,
  StyledTable,
  StyledNameCell,
  StyledImage,
  StyledTableHead,
} from "./CategoryTable.styles";
import { TableContainer, TableCell, TableBody, TableRow } from "@mui/material";
import numeral from "numeral";
import autoAnimate from "@formkit/auto-animate";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

export const CategoryTable = ({ teams }: any) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [data] = useState(teams);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const columns = useMemo<ColumnDef<unknown, any>[]>(
    () => [
      {
        header: " ",
        footer: (props: any) => props.column.id,
        columns: [
          {
            header: "Name",
            accessorKey: "name",
            cell: (info: any) => (
              <StyledNameCell>
                <StyledImage src={info.row.original.logo} />
                {info.getValue()}
              </StyledNameCell>
            ),
            footer: (props: any) => props.column.id,
          },
          {
            header: "FGA",
            accessorKey: "fga",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
          {
            header: "FGM",
            accessorKey: "fgm",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
          {
            header: "FTA",
            accessorKey: "fta",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
          {
            header: "FTM",
            accessorKey: "ftm",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
          {
            header: "3PM",
            accessorKey: "3pm",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
          {
            header: "REB",
            accessorKey: "reb",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
          {
            header: "AST",
            accessorKey: "ast",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
          {
            header: "STL",
            accessorKey: "stl",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
          {
            header: "BLK",
            accessorKey: "blk",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
          {
            header: "TO",
            accessorKey: "to",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
          {
            header: "PTS",
            accessorKey: "pts",
            cell: (info: any) => numeral(info.getValue()).format("0,0"),
            footer: (props: any) => props.column.id,
          },
        ],
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <div>
      <StyledPaper>
        <TableContainer>
          <StyledTable stickyHeader aria-label="sticky table">
            <StyledTableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableCell key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: " ☝️",
                              desc: " 👇",
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </StyledTableHead>
            <TableBody ref={parent}>
              {table.getRowModel().rows.map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </StyledPaper>
    </div>
  );
};
