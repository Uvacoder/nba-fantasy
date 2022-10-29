import styled from "styled-components";
import { Box, Container, Tabs, Tab } from "@mui/material";

export const StyledMainLayout = styled.section`
  padding: 16px;
  max-width: 1200px;
  width: 100%;
`;

export const StyledBox = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledContainer = styled(Container)``;

export const StyledTabs = styled(Tabs)``;

export const StyledTab = styled(Tab)`
  && {
    text-transform: none;
    font-weight: 800;
  }
`;
