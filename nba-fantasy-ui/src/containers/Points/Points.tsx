import { useEffect, useState } from "react";
import { getScores, getCurrentMatchupPeriod } from "../../services";
import {
  LoadingSkeleton,
  PointsTotalTable,
  MatchUpDropdown,
} from "../../components";
import { data } from "./data";

export const Points = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [scores, setScores] = useState([]);
  const [currentMatchUpWeek, setCurrentMatchUpWeek] = useState<number>(1);
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
    <>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <MatchUpDropdown
            currentMatchUpWeek={currentMatchUpWeek}
            onChangeMatchUpWeek={onChangeMatchUpWeek}
          />
          <PointsTotalTable scores={data} isLoading={false} />
        </>
      )}
    </>
  );
};

export default Points;
