import { Dashboard } from "../Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "../../themes";

export function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
