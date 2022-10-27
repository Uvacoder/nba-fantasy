import { useEffect, useState } from "react";
import { getScores, getCurrentMatchupPeriod } from "../../services";
import { MainLayout } from "../../layouts";
import {
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
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const currentMatchupPeriod = await getCurrentMatchupPeriod();

        const response = await getScores({
          matchupPeriodId: currentMatchupPeriod,
        });

        setScores(response);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  console.log(scores);
  const onChangeMatchUpWeek = async (matchupPeriodId: string) => {
    console.log("onChangeMatchUpWeek -", matchupPeriodId);
    try {
      const response = await getScores({ matchupPeriodId });
      console.log(response);
      setScores(response);
    } catch {
    } finally {
    }
  };

  return (
    <StyledDashboard>
      <MainLayout currentTab={tab} setTab={setTab}>
        {/* <LoadingSkeleton /> */}
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {tab === TabTypes.Points && (
              <PointsTotalTable
                scores={scores}
                onChangeMatchUpWeek={onChangeMatchUpWeek}
              />
            )}
            {tab === TabTypes.Categories && <CategoryTotals />}
          </>
        )}
      </MainLayout>
    </StyledDashboard>
  );
}

export default Dashboard;
