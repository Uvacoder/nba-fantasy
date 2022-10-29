import { useState, useMemo } from "react";
import { StyledNameCell, StyledImage } from "./CategoryTable.styles";
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
            cell: (info: any) => info.getValue(),
            footer: (props: any) => props.column.id,
          },
          {
            header: "FGM",
            accessorKey: "fgm",
            cell: (info: any) => info.getValue(),
            footer: (props: any) => props.column.id,
          },
          {
            header: "FTA",
            accessorKey: "fta",
            cell: (info: any) => info.getValue(),
            footer: (props: any) => props.column.id,
          },
          {
            header: "FTM",
            accessorKey: "ftm",
            cell: (info: any) => info.getValue(),
            footer: (props: any) => props.column.id,
          },
          {
            header: "3PM",
            accessorKey: "3pm",
            cell: (info: any) => info.getValue(),
            footer: (props: any) => props.column.id,
          },
          {
            header: "REB",
            accessorKey: "reb",
            cell: (info: any) => info.getValue(),
            footer: (props: any) => props.column.id,
          },
          {
            header: "AST",
            accessorKey: "ast",
            cell: (info: any) => info.getValue(),
            footer: (props: any) => props.column.id,
          },
          {
            header: "STL",
            accessorKey: "stl",
            cell: (info: any) => info.getValue(),
            footer: (props: any) => props.column.id,
          },
          {
            header: "BLK",
            accessorKey: "blk",
            cell: (info: any) => info.getValue(),
            footer: (props: any) => props.column.id,
          },
          {
            header: "TO",
            accessorKey: "to",
            cell: (info: any) => info.getValue(),
            footer: (props: any) => props.column.id,
          },
          {
            header: "PTS",
            accessorKey: "pts",
            cell: (info: any) => info.getValue(),
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

  console.log(table.getRowModel().rows);
  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
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
                              asc: " 🔼",
                              desc: " 🔽",
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
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
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
