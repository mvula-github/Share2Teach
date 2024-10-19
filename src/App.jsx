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
import ManageFAQ from "./Pages/AdminPage/FAQ/FAQ";
import FileUpload from "./Pages/FileUpload/FileUpload";
import Moderate from "./Pages/Moderate/Moderate";
import FAQ from "./Pages/FAQ/FAQ";

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
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/reset-password" element={<PasswordReset />} />
              <Route path="/signUp" element={<SignUp />} />

              {/* General Users */}
              <Route path="/oer" element={<OER />} />
              <Route path="/faq" element={<FAQ />} />

              {/* Educators */}
              <Route path="/contribute" element={<FileUpload />} />

              {/* Moderators */}
              <Route path="/moderate" element={<Moderate />} />

              {/* Admins */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/managefaq" element={<ManageFAQ />} />
              <Route path="/contributors" element={<Contributors />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
