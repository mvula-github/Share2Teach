/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Formik } from "formik";
import * as yup from "yup";
import { tokens } from "../../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";
import axios from "axios";

const ManageFAQ = () => {
  //-------------------------VIEWING FAQ------------------------------
  const [faqs, setFAQ] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/faqs`);
        // Assume response.data is an array of objects from your database
        let count = 0;
        const data = response.data.map((faq) => ({
          id: (count += 1),
          category: faq.category,
          question: faq.question,
          answer: faq.answer,
        }));
        setFAQ(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", cellClassName: "Id-column--cell" },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      cellClassName: "category-column--cell",
    },
    {
      field: "question",
      headerName: "Question",
      flex: 1,
    },
    {
      field: "answer",
      headerName: "Answer",
      flex: 1,
    },
  ];

  //-------------------------ADDING FAQ------------------------------

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Box m="20px">
        <Header title="Manage FAQs" subtitle="Add, update, or delete FAQs" />

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(5, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Category"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.category}
                  name="category"
                  error={!!touched.category && !!errors.category}
                  helperText={touched.category && errors.category}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Question"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.question}
                  name="question"
                  error={!!touched.question && !!errors.question}
                  helperText={touched.question && errors.question}
                  sx={{ gridColumn: "span 3" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Answer"
                  multiline
                  rows={4}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.answer}
                  name="answer"
                  error={!!touched.question && !!errors.question}
                  helperText={touched.question && errors.question}
                  sx={{ gridColumn: "span 5" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Add
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
      <Box
        m="40px 20px 0 20px"
        height="50vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .category-column--cell": {
            color: colors.navy[600],
          },
          "& .Id-column--cell": {
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
          checkboxSelection
          rows={faqs}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </>
  );
};

const checkoutSchema = yup.object().shape({
  category: yup.string().required("required"),
  question: yup.string().required("required"),
  answer: yup.string().required("required"),
});
const initialValues = {
  category: "",
  question: "",
  answer: "",
};

// eslint-disable-next-line react-refresh/only-export-components
export default ManageFAQ;
