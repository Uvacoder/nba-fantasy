import { useState } from "react";
import { MainLayout } from "../../layouts";
import { Categories, Points, Ladder } from "../index";
import { StyledDashboard } from "./Dashboard.styles";
import { TabTypes } from "../../types";

export function Dashboard() {
  const [tab, setTab] = useState<TabTypes>(TabTypes.Points);

  return (
    <StyledDashboard>
      <MainLayout currentTab={tab} setTab={setTab}>
        <Ladder />
        {/* <>
          {tab === TabTypes.Points && <Points />}
          {tab === TabTypes.Categories && <Categories />}
          {tab === TabTypes.Ladder && <Ladder />}
        </> */}
      </MainLayout>
    </StyledDashboard>
  );
}

export default Dashboard;
