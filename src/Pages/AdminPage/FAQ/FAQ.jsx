/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";

const FAQ = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header
        title="Manage FAQs"
        subtitle="add, update, and remove your FAQs"
      />

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
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
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
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.answer}
                name="answer"
                error={!!touched.answer && !!errors.answer}
                helperText={touched.answer && errors.answer}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" gap="1.5rem" justifyContent="end" m="20px">
              <Button type="submit" color="secondary" variant="contained">
                New
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Update
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Delete
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
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
export default FAQ;
