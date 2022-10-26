import styled from "styled-components";
import { Typography } from "@mui/material";

export const StyledLoadingSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTypography = styled(Typography)`
  && {
    font-weight: 600;
  }
`;

export const StyledImage = styled.img`
  max-width: 500px;
`;
