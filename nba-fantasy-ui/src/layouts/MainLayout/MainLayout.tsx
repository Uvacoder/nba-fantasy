import { StyledMainLayout, StyledBox } from "./MainLayout.styles";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { TabTypes } from "../../types";

interface MainLayoutProps {
  currentTab: TabTypes;
  setTab: any;
  children: JSX.Element;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  currentTab,
  setTab,
  children,
}) => {
  return (
    <StyledMainLayout>
      <StyledBox>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={currentTab}
            onChange={(_: React.SyntheticEvent, newValue: number) => {
              setTab(newValue);
            }}
          >
            <Tab label="Points" value={TabTypes.Points} />
            <Tab label="Categories" value={TabTypes.Categories} />
          </Tabs>
        </Box>
      </StyledBox>
      <Container maxWidth="lg">{children}</Container>
    </StyledMainLayout>
  );
};

export default MainLayout;
