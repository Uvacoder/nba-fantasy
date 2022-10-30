import { useEffect, useState } from "react";
import { getScores, getCurrentMatchupPeriod } from "../../services";
import { MainLayout } from "../../layouts";
import { Categories, Points } from "../index";
import {
  CategoryTotals,
  LoadingSkeleton,
  PointsTotalTable,
  CategoryTable,
  CategoryLeaderList,
} from "../../components";
import { StyledDashboard } from "./Dashboard.styles";
import { TabTypes } from "../../types";

export function Dashboard() {
  const [tab, setTab] = useState<TabTypes>(TabTypes.Points);

  return (
    <StyledDashboard>
      <MainLayout currentTab={tab} setTab={setTab}>
        <>
          {tab === TabTypes.Points && <Points />}
          {tab === TabTypes.Categories && <CategoryTotals />}
        </>
      </MainLayout>
    </StyledDashboard>
  );
}

export default Dashboard;
