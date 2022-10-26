import { useState } from "react";
import { StyledMatchUpDropdown } from "./MatchUpDropdown.styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const matchUpOptions = [
  { label: "Matchup 1 (Oct 17 - 23)", scoringPeriodId: 7 },
  { label: "Matchup 2 (Oct 24 - 30)", scoringPeriodId: "n/a" },
  { label: "Matchup 3 (Oct 31 - Nov 6)", scoringPeriodId: 15 },
  { label: "Matchup 4 (Nov 7 - 13)", scoringPeriodId: 22 },
  { label: "Matchup 5 (Nov 14 - 20)", scoringPeriodId: 29 },
  { label: "Matchup 6 (Nov 21 - 27)", scoringPeriodId: 36 },
  { label: "Matchup 7 (Nov 28 - Dec 4)", scoringPeriodId: 43 },
  { label: "Matchup 8 (Dec 5 - 11)", scoringPeriodId: 50 },
  { label: "Matchup 9 (Dec 12 - 18)", scoringPeriodId: 57 },
  { label: "Matchup 10 (Dec 19 - 25)", scoringPeriodId: 64 },
  { label: "Matchup 11 (Dec 26 - Jan 1)", scoringPeriodId: 71 },
  { label: "Matchup 12 (Jan 2 - 8)", scoringPeriodId: 78 },
  { label: "Matchup 13 (Jan 9 - 15)", scoringPeriodId: 85 },
  { label: "Matchup 14 (Jan 16 - 22)", scoringPeriodId: 92 },
  { label: "Matchup 15 (Jan 23 - 29)", scoringPeriodId: 99 },
  { label: "Matchup 16 (Jan 30 - Feb 5)", scoringPeriodId: 106 },
  { label: "Matchup 17 (Feb 6 - 12)", scoringPeriodId: 113 },
  { label: "Matchup 18 (Feb 13 - 26)", scoringPeriodId: 120 },
  { label: "Matchup 19 (Feb 27 - Mar 5)", scoringPeriodId: 134 },
  { label: "Matchup 20 (Mar 6 - 12)", scoringPeriodId: 141 },
];

export const MatchUpDropdown = ({ onChangeMatchUpWeek }: any) => {
  const [matchUpWeek, setMatchUpWeek] = useState<string>("n/a");

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setMatchUpWeek(event.target.value);
    onChangeMatchUpWeek(event.target.value);
  };

  return (
    <StyledMatchUpDropdown>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Matchups</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={matchUpWeek}
          label="Matchups"
          onChange={handleChange}
        >
          {matchUpOptions.map(({ label, scoringPeriodId }) => (
            <MenuItem value={scoringPeriodId?.toString()}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledMatchUpDropdown>
  );
};
