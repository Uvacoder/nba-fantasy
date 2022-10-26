import { useEffect, useState } from "react";
import { getTeams } from "../../services";
import { MainLayout } from "../../layouts";
import {
  PointsTotal,
  CategoryTotals,
  LoadingSkeleton,
  PointsTotalTable,
} from "../../components";
import { StyledDashboard } from "./Dashboard.styles";
import { TabTypes } from "../../types";
import { statMap, statPointConversion } from "../../utils/helpers";

export function Dashboard() {
  const [tab, setTab] = useState<TabTypes>(TabTypes.Points);
  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await getTeams();
        setTeams(response);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const updatedTeams = teams.map((team: any) => {
    const totalPoints: any = Object.keys(team.valuesByStat).reduce(
      (acc, value): any => {
        return (
          acc + statPointConversion[statMap[value]] * team.valuesByStat[value]
        );
      },
      0
    );

    const valuesByStat = Object.keys(team.valuesByStat).reduce(
      (acc, stat): any => {
        return { ...acc, [statMap[stat]]: team.valuesByStat[stat] };
      },
      {}
    );

    return {
      name: `${team.location} ${team.nickname}`,
      logo: team.logo,
      totalPoints,
      ...valuesByStat,
    };
  });

  return (
    <StyledDashboard>
      <MainLayout currentTab={tab} setTab={setTab}>
        {/* <LoadingSkeleton /> */}
        {/* <PointsTotalTable teams={updatedTeams} /> */}
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {tab === TabTypes.Points && (
              <PointsTotalTable teams={updatedTeams} />
            )}
            {tab === TabTypes.Categories && <CategoryTotals />}
          </>
        )}
      </MainLayout>
    </StyledDashboard>
  );
}

export default Dashboard;
