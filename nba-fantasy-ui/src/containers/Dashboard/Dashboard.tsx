import { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";
import { TabTypes } from "../../types";
import { PointsTotal, CategoryTotals, LoadingSkeleton } from "../../components";

const statMap: any = {
  0: "PTS",
  1: "BLK",
  2: "STL",
  3: "AST",
  6: "REB",
  11: "TO",
  13: "FGM",
  14: "FGA",
  15: "FTM",
  16: "FTA",
  17: "3PM",
  19: "FG_PERCENTAGE",
  20: "FT_PERCENTAGE",
};

const statPointConversion: any = {
  PTS: 1,
  BLK: 4,
  STL: 4,
  AST: 2,
  REB: 1,
  TO: -2,
  FGM: 2,
  FGA: -1,
  FTM: 1,
  FTA: -1,
  "3PM": 1,
  FG_PERCENTAGE: 0,
  FT_PERCENTAGE: 0,
};

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
