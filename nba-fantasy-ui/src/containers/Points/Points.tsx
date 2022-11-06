import { useEffect, useState } from "react";
import { getScores, getCurrentMatchupPeriod } from "../../services";
import {
  CategoriesLoadingSkeleton,
  PointsTable,
  MatchUpDropdown,
  Cat,
  MatchUps,
} from "./components";
import {
  StyledImage,
  StyledNavigation,
  StyledCatIcon,
  StyledRotoIcon,
} from "./Points.styles";

export const Points = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [scores, setScores] = useState([]);
  const [currentMatchUpWeek, setCurrentMatchUpWeek] = useState<number>(1);
  const [isScoresUpdating, setIsScoresUpdating] = useState(false);
  const [type, setType] = useState("roto");

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
        <>
          <StyledNavigation>
            <StyledRotoIcon
              isactive={type === "roto"}
              onClick={() => setType("roto")}
            />
            <StyledCatIcon
              isactive={type === "cat"}
              onClick={() => setType("cat")}
            />
          </StyledNavigation>
          <MatchUpDropdown
            currentMatchUpWeek={currentMatchUpWeek}
            onChangeMatchUpWeek={onChangeMatchUpWeek}
          />
          {type === "roto" ? (
            <PointsTable
              scores={scores}
              isLoading={isScoresUpdating}
              key={currentMatchUpWeek}
            />
          ) : (
            <MatchUps />
          )}
        </>
      )}
    </>
  );
};

export default Points;
