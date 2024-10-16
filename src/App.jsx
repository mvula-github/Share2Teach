/* eslint-disable no-unused-vars */
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import Admin from "./Pages/AdminPage/Admin";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app-container">
          {/* <Landing /> */}
          <Admin />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
