export type ColumnIds =
  | "name"
  | "fga"
  | "fta"
  | "ftm"
  | "fgm"
  | "3pm"
  | "reb"
  | "ast"
  | "stl"
  | "blk"
  | "to"
  | "pts"
  | "totalPoints";

export interface Column {
  id: ColumnIds;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
}

export interface Score {
  "3pm": number;
  ast: number;
  blk: number;
  fgPercentage: number;
  fga: number;
  fgm: number;
  fta: number;
  ftm: number;
  logo: string;
  name: string;
  pts: number;
  reb: number;
  stl: number;
  to: number;
  totalPoints: number;
}

export interface PointsTotalTableProps {
  scores: Score[];
  isLoading: boolean;
}
