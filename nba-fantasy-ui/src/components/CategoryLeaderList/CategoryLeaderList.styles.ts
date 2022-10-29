import styled from "styled-components";
import { Typography } from "@mui/material";

export const StyledCategoryLeaderList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

export const StyledHeading = styled(Typography)`
  && {
    font-weight: 600;
    margin-bottom: 36px;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 10%;
`;