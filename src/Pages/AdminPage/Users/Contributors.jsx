/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../Header";

const Contributors = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users`);
        // Assume response.data is an array of objects from your database
        let count = 0;
        const data = response.data.map((user) => ({
          id: (count += 1),
          name: `${user.fName} ${user.lName}`,
          //documents
          role: user.role,
        }));
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", cellClassName: "Id-column--cell" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "documents",
      headerName: "Documents",
      flex: 1,
    },
    {
      field: "Role",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="10px auto"
            p="7px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            <Typography color={colors.navy[600]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Contributors" subtitle="View all users who contributed" />
      <Box
        m="40px 0 0 0"
        height="90vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.navy[600],
          },
          "& .Id-column--cell": {
            color: colors.navy[500],
          },
          "& .email-column--cell": {
            color: colors.navy[500],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blue[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.sky[300],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blue[500],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.sky[500]} !important`,
          },
        }}
      >
        <DataGrid
          rows={users}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contributors;
