import {
  StyledMainLayout,
  StyledBox,
  StyledTabs,
  StyledTab,
} from "./MainLayout.styles";
import { Container } from "@mui/material";
import { TabTypes } from "../../types";

interface MainLayoutProps {
  currentTab: TabTypes;
  setTab: any;
  children: JSX.Element;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  currentTab,
  setTab,
  children,
}) => {
  return (
    <StyledMainLayout>
      <StyledBox>
        <StyledTabs
          value={currentTab}
          onChange={(_: React.SyntheticEvent, newValue: number) => {
            setTab(newValue);
          }}
        >
          <StyledTab label="Points" value={TabTypes.Points} />
          <StyledTab label="Categories" value={TabTypes.Categories} />
          <StyledTab label="Match ups" value={TabTypes.MatchUps} />
        </StyledTabs>
      </StyledBox>
      <Container maxWidth="lg">{children}</Container>
    </StyledMainLayout>
  );
};

export default MainLayout;
