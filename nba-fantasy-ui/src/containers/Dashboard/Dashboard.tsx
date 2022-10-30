import { useState } from "react";
import { MainLayout } from "../../layouts";
import { Categories, Points } from "../index";
import { StyledDashboard } from "./Dashboard.styles";
import { TabTypes } from "../../types";

export function Dashboard() {
  const [tab, setTab] = useState<TabTypes>(TabTypes.Points);

  return (
    <StyledDashboard>
      <MainLayout currentTab={tab} setTab={setTab}>
        <>
          <Categories />
          {/* {tab === TabTypes.Points && <Points />}
          {tab === TabTypes.Categories && <Categories />} */}
        </>
      </MainLayout>
    </StyledDashboard>
  );
}

export default Dashboard;
