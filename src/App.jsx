/* eslint-disable no-unused-vars */
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Landing from "./Pages/Landing/Landing";
import Subjects from "./Pages/Subjects/Subjects";
import SelfDirect from "./Pages/Self-Directed/SelfDirect";
import SideBar from "./Components/SideBar/SideBar";
import Users from "./Pages/AdminPage/Users/Users";
import Contributors from "./Pages/AdminPage/Users/Contributors";
import SignUp from "./Pages/SignUp/SignUp";
import PasswordReset from "./Pages/PasswordReset/PasswordReset";
import OER from "./Pages/OER/OER";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ManageFAQ from "./Pages/AdminPage/ManageFAQ/ManageFAQ";
import FileUpload from "./Pages/FileUpload/FileUpload";
import Moderate from "./Pages/Moderate/Moderate";
import FAQ from "./Pages/FAQ/FAQ";
import { UserProvider } from "./Components/UserContext";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <UserProvider>
            <SideBar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/reset-password" element={<PasswordReset />} />
                <Route path="/signUp" element={<SignUp />} />

                {/* General Users */}
                <Route path="/subjects" element={<Subjects />} />
                <Route path="/sdl" element={<SelfDirect />} />
                <Route path="/oer" element={<OER />} />
                <Route path="/faq" element={<FAQ />} />

                {/* Educators */}
                <Route path="/contribute" element={<FileUpload />} />

                {/* Moderators */}
                <Route path="/moderate" element={<Moderate />} />

                {/* Admins */}
                <Route path="/users" element={<Users />} />
                <Route path="/managefaq" element={<ManageFAQ />} />
                <Route path="/contributors" element={<Contributors />} />
              </Routes>
            </div>
          </UserProvider>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
