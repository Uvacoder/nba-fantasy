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

export function Dashboard() {
  const [tab, setTab] = useState<TabTypes>(TabTypes.Points);
  const [isLoading, setIsLoading] = useState(false);
  const [scores, setScores] = useState([]);
  const [currentMatchUpWeek, setCurrentMatchUpWeek] = useState<number | null>(
    null
  );
  const [isScoresUpdating, setIsScoresUpdating] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const currentMatchupPeriod = await getCurrentMatchupPeriod();
        setCurrentMatchUpWeek(currentMatchupPeriod);
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

  const onChangeMatchUpWeek = async (matchupPeriodId: number) => {
    setCurrentMatchUpWeek(matchupPeriodId);
    setIsScoresUpdating(true);
    try {
      const response = await getScores({ matchupPeriodId });
      setScores(response);
    } catch {
    } finally {
      setIsScoresUpdating(false);
    }
  };

  return (
    <StyledDashboard>
      <MainLayout currentTab={tab} setTab={setTab}>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {tab === TabTypes.Points && (
              <PointsTotalTable
                scores={scores}
                currentMatchUpWeek={currentMatchUpWeek || 1}
                onChangeMatchUpWeek={onChangeMatchUpWeek}
                isLoading={isScoresUpdating}
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
