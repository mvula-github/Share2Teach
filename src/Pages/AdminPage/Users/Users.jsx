/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../Header";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users`);
        // Assume response.data is an array of objects from your database
        const data = response.data.map((user, index) => ({
          id: user._id || index, // Ensure each row has a unique ID
          name: `${user.fName} ${user.lName}`,
          email: user.email,
          affiliation: user.affiliation,
          credentials: user.credentials,
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

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "affiliation",
      headerName: "Affiliation",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "credentials",
      headerName: "Credentials",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      cellClassName: "email-column--cell",
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="50%"
            m="10px auto"
            p="8px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === "admin"
                ? colors.navy[600]
                : role === "moderator"
                ? colors.blue[600]
                : colors.blue[300]
            }
            borderRadius="4px"
          >
            <Typography color={colors.white[500]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Users" subtitle="Managing the Users" />
      <Box
        m="40px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.navy[500],
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
          "& .MuiCheckbox-root": {
            color: `${colors.blue[400]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.sky[500]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={users}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Users;
