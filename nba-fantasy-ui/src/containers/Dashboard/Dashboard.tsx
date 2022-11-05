import { useState } from "react";
import { MainLayout } from "../../layouts";
import { Categories, Points, MatchUps } from "../index";
import { StyledDashboard } from "./Dashboard.styles";
import { TabTypes } from "../../types";

export function Dashboard() {
  const [tab, setTab] = useState<TabTypes>(TabTypes.Points);

  return (
    <StyledDashboard>
      <MainLayout currentTab={tab} setTab={setTab}>
        <MatchUps />
        {/* <>
          {tab === TabTypes.Points && <Points />}
          {tab === TabTypes.Categories && <Categories />}
          {tab === TabTypes.MatchUps && <MatchUps />}
        </> */}
      </MainLayout>
    </StyledDashboard>
  );
}

export default Dashboard;
