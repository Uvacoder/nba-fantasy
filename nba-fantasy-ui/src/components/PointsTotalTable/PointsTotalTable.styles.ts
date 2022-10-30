import styled from "styled-components";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Skeleton,
} from "@mui/material";

export const StyledPaper = styled(Paper)`
  && {
    width: "100%";
    overflow: "hidden";
  }
`;

export const StyledTable = styled(Table)`
  tbody {
    tr {
      height: 74px;
      max-height: 74px;
    }
  }
`;

export const StyledTableHead = styled(TableHead)`
  th {
    font-weight: 600;
  }
`;

export const StyledNameCell = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: auto 1fr;
`;

export const StyledImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const StyledSkeleton = styled(Skeleton)`
  && {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
