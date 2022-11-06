import { StyledMatchUpDropdown } from "./CategoryTableDropdown.styles";
import { InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CategoryTableDropdownProps } from "./types";

const matchUpOptions = [
  { label: "Total", value: 1 },
  { label: "Total w/ rankings", value: 2 },
];

export const CategoryTableDropdown = ({
  currentTableTotals,
  onChangeTableTotals,
}: CategoryTableDropdownProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChangeTableTotals(parseInt(event.target.value));
  };

  console.log(currentTableTotals);

  return (
    <StyledMatchUpDropdown>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentTableTotals.toString()}
          label="Matchups"
          onChange={handleChange}
        >
          {matchUpOptions.map(({ label }, index) => (
            <MenuItem key={index} value={index + 1}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledMatchUpDropdown>
  );
};
