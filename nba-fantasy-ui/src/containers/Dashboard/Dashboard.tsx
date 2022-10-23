import { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";
import { TabTypes } from "../../types";
import { PointsTotal, CategoryTotals, LoadingSkeleton } from "../../components";
import { statMap, statPointConversion } from "../../utils/helpers";

export function Dashboard() {
  const [tab, setTab] = useState<TabTypes>(TabTypes.Points);
  const [isLoading, setIsLoading] = useState(false);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response: any = await axios.get("http://localhost:7777");
        setTeams(response.data.teams);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  console.log(teams);
  const updatedTeams = teams.map((team: any) => {
    const totalPoints: any = Object.keys(team.valuesByStat).reduce(
      (acc, value): any => {
        return (
          acc + statPointConversion[statMap[value]] * team.valuesByStat[value]
        );
      },
      0
    );

    return {
      ...team,
      totalPoints,
    };
  });

  return (
    <div className="App">
      <MainLayout currentTab={tab} setTab={setTab}>
        <LoadingSkeleton />
        {/* {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {tab === TabTypes.Points && <PointsTotal teams={updatedTeams} />}
            {tab === TabTypes.Categories && <CategoryTotals />}
          </>
        )} */}
      </MainLayout>
    </div>
  );
}

export default Dashboard;
