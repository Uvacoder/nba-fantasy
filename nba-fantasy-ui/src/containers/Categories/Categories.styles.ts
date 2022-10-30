import styled from "styled-components";
import { Typography } from "@mui/material";

export const StyledCategories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const StyledHeading = styled(Typography)`
  && {
    font-weight: 600;
    margin-bottom: 16px;
  }
`;
