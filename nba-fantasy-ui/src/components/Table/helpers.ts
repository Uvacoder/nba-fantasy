import { Column } from "../../containers/Points/components/PointsTable/types";
import numeral from "numeral";

export const columns: Column[] = [
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
