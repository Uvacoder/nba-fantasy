import styled from "styled-components";
import { Paper, TableHead, Skeleton } from "@mui/material";

export const StyledPaper = styled(Paper)`
  && {
    width: 100%;
    overflow: hidden;
  }
`;

export const StyledTableHead = styled(TableHead)`
  th {
    font-weight: 600;
    width: 100%;
  }
`;

export const StyledSkeleton = styled(Skeleton)`
  && {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
