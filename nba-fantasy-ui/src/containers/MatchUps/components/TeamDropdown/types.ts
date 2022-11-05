export interface TeamDropdownProps {
  selectOptions: { label: string; value: string }[];
  currentTeam: string;
  onChangeTeam: (number: string) => void;
}
