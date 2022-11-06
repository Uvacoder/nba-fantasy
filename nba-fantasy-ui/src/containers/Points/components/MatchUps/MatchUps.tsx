import { useState } from "react";
import { MatchUpTable, TeamDropdown } from "../index";

export const MatchUps = ({ scores }: any) => {
  const [currentTeam, setCurrentTeam] = useState<string>("1");

  return (
    <>
      <TeamDropdown
        selectOptions={scores.map(({ name, id }: any) => ({
          label: name,
          value: id.toString(),
        }))}
        currentTeam={currentTeam}
        onChangeTeam={setCurrentTeam}
      />
      <MatchUpTable
        selectedTeam={scores.find(
          (team: any) => team.id === parseInt(currentTeam)
        )}
        scores={scores.filter((team: any) => team.id !== parseInt(currentTeam))}
        isLoading={false}
      />
    </>
  );
};
