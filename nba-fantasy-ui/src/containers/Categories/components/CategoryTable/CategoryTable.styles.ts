import styled from "styled-components";
import { Paper, Table, TableHead } from "@mui/material";

export const StyledPaper = styled(Paper)`
  && {
    width: 100%;
    overflow: hidden;
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
  > * {
    &:first-child {
      display: none;
    }
  }
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
