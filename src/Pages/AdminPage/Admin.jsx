/* eslint-disable no-unused-vars */
import React from "react";
import TopBar from "./TopBar/TopBar";
import Dashboard from "./DashBoard/Dashboard";
import { Routes, Route } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";
// import Bar from "./Charts/Bar";
// import Line from "./Charts/Line";
// import Pie from "./Charts/Pie";
// import FAQ from "./FAQ/FAQ";
// import Contributors from "./Users/Contributors";
import Users from "./Users/Users";

const Admin = () => {
  return (
    <>
      <div className="app">
        <SideBar />
        <div className="content">
          <TopBar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            {/*<Route path="/contributors" element={<Contributors />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/line" element={<Line />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/faq" element={<FAQ />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;
