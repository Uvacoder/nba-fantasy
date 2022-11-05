import { StyledMatchUpDropdown } from "./TeamDropdown.styles";
import { InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TeamDropdownProps } from "./types";

export const TeamDropdown = ({
  selectOptions,
  currentTeam,
  onChangeTeam,
}: TeamDropdownProps) => {
  return (
    <StyledMatchUpDropdown>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select a team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentTeam}
          label="Select a team"
          onChange={(event: SelectChangeEvent) =>
            onChangeTeam(event.target.value)
          }
        >
          {selectOptions.map(({ label, value }: any) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledMatchUpDropdown>
  );
};
