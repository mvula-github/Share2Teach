/* eslint-disable no-unused-vars */
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import SideBar from "./Components/SideBar/SideBar";
import Dashboard from "./Pages/AdminPage/DashBoard/Dashboard";
import Users from "./Pages/AdminPage/Users/Users";
import Contributors from "./Pages/AdminPage/Users/Contributors";
import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import PasswordReset from "./Pages/PasswordReset/PasswordReset";
import OER from "./Pages/OER/OER";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManageFAQ from "./Pages/AdminPage/FAQ/ManageFAQ ";
//import Navigation from './Components/Navigation/Navigation';

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
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/reset-password" element={<PasswordReset />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/oer" element={<OER />} />
              <Route path="/managefaq" element={<ManageFAQ />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
