import { useEffect, useState } from "react";
import { getScores, getCurrentMatchupPeriod } from "../../../../services";
import { MatchUpTable, TeamDropdown } from "../index";
import { data } from "./data";

export const MatchUps = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [scores, setScores] = useState([]);
  const [currentTeam, setCurrentTeam] = useState<string>("1");
  // const [isScoresUpdating, setIsScoresUpdating] = useState(false);

  // useEffect(() => {
  //   const loadData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const currentMatchupPeriod = await getCurrentMatchupPeriod();
  //       setCurrentMatchUpWeek(currentMatchupPeriod);
  //       const response = await getScores({
  //         matchupPeriodId: currentMatchupPeriod,
  //       });

  //       setScores(response);
  //     } catch {
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   loadData();
  // }, []);

  return (
    <>
      <TeamDropdown
        selectOptions={data.map(({ name, id }) => ({
          label: name,
          value: id.toString(),
        }))}
        currentTeam={currentTeam}
        onChangeTeam={setCurrentTeam}
      />
      <MatchUpTable
        selectedTeam={data.find((team) => team.id === parseInt(currentTeam))}
        scores={data.filter((team) => team.id !== parseInt(currentTeam))}
        isLoading={false}
      />
      {/* {isLoading ? (
        <CategoriesLoadingSkeleton />
      ) : (
        <>
          <MatchUpDropdown
            currentMatchUpWeek={currentMatchUpWeek}
            onChangeMatchUpWeek={onChangeMatchUpWeek}
          />
          <PointsTable
            scores={scores}
            isLoading={isScoresUpdating}
            key={currentMatchUpWeek}
          />
        </>
      )} */}
    </>
  );
};
