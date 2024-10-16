/* eslint-disable no-unused-vars */
import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box displY="flex" justifyContent={"space-between"} alignItems={"center"}>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
