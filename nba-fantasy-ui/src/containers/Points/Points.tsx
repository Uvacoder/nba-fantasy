import { useEffect, useState } from "react";
import { getScores, getCurrentMatchupPeriod } from "../../services";
import {
  CategoriesLoadingSkeleton,
  PointsTable,
  MatchUpDropdown,
  MatchUps,
  SecondaryNavigation,
} from "./components";
import { PointTypes } from "./types";
import { points } from "../../utils/mockData";

export const Points = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [scores, setScores] = useState([]);
  const [currentMatchUpWeek, setCurrentMatchUpWeek] = useState<number>(1);
  const [isScoresUpdating, setIsScoresUpdating] = useState(false);
  const [type, setType] = useState<PointTypes>(PointTypes.rotisserie);

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
        <CategoriesLoadingSkeleton />
      ) : (
        <SecondaryNavigation type={type} onChangeType={setType}>
          <MatchUpDropdown
            currentMatchUpWeek={currentMatchUpWeek}
            onChangeMatchUpWeek={onChangeMatchUpWeek}
          />
          {type === PointTypes.rotisserie ? (
            <PointsTable
              scores={scores}
              isLoading={isScoresUpdating}
              key={currentMatchUpWeek}
            />
          ) : (
            <MatchUps scores={points} />
          )}
        </SecondaryNavigation>
      )}
    </>
  );
};

export default Points;
