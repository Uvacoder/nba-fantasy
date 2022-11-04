import styled from "styled-components";
import { Typography } from "@mui/material";

export const StyledCategoryTableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyleTypography = styled(Typography)`
  && {
    font-weight: 600;
  }
`;
