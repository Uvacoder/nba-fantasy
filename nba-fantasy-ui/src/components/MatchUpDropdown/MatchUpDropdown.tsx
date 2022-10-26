import { useState } from "react";
import { StyledMatchUpDropdown } from "./MatchUpDropdown.styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const matchUpOptions = [
  { label: "Matchup 1 (Oct 17 - 23)" },
  { label: "Matchup 2 (Oct 24 - 30)" },
  { label: "Matchup 3 (Oct 31 - Nov 6)" },
  { label: "Matchup 4 (Nov 7 - 13)" },
  { label: "Matchup 5 (Nov 14 - 20)" },
  { label: "Matchup 6 (Nov 21 - 27)" },
  { label: "Matchup 7 (Nov 28 - Dec 4)" },
  { label: "Matchup 8 (Dec 5 - 11)" },
  { label: "Matchup 9 (Dec 12 - 18)" },
  { label: "Matchup 10 (Dec 19 - 25)" },
  { label: "Matchup 11 (Dec 26 - Jan 1)" },
  { label: "Matchup 12 (Jan 2 - 8)" },
  { label: "Matchup 13 (Jan 9 - 15)" },
  { label: "Matchup 14 (Jan 16 - 22)" },
  { label: "Matchup 15 (Jan 23 - 29)" },
  { label: "Matchup 16 (Jan 30 - Feb 5)" },
  { label: "Matchup 17 (Feb 6 - 12)" },
  { label: "Matchup 18 (Feb 13 - 26)" },
  { label: "Matchup 19 (Feb 27 - Mar 5)" },
  { label: "Matchup 20 (Mar 6 - 12)" },
];

export const MatchUpDropdown = () => {
  const [matchUpWeek, setMatchUpWeek] = useState("0");

  const handleChange = (event: SelectChangeEvent) => {
    setMatchUpWeek(event.target.value.toString());
  };

  return (
    <StyledMatchUpDropdown>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Matchups</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={matchUpWeek.toString()}
          label="Matchups"
          onChange={handleChange}
        >
          {matchUpOptions.map(({ label }, index) => (
            <MenuItem value={index}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledMatchUpDropdown>
  );
};
