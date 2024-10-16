/* eslint-disable no-unused-vars */
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Dashboard from "./Pages/AdminPage/DashBoard/Dashboard";
import Users from "./Pages/AdminPage/Users/Users";
import Contributors from "./Pages/AdminPage/Users/Contributors";
import TopBar from "./Pages/AdminPage/TopBar/TopBar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <div className="content">
            <Routes>
              <Route path="/home" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/contributors" element={<Contributors />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
