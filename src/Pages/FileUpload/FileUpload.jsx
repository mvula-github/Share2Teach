/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  IconButton,
  TextField,
  MenuItem,
  useTheme,
} from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { tokens } from "../../theme";
import DeleteIcon from "@mui/icons-material/Delete";
import "./FileUpload.css";
import mockData from "./mockData.json"; // Import mock data
import axios from "axios";

function FileUpload({ accept = "", onSelectFile, onDeleteFile, disabled }) {
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [grades, setGrades] = useState([]);
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    setSubjects(mockData.subjects);
    setGrades(mockData.grades);
    setCategories(mockData.categories);
  }, []);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const selectedFile = event.target.files[0]; // Access the first file
    if (selectedFile) {
      if (selectedFile.size > 30 * 1024 * 1024) {
        setErrors({ ...errors, file: "File too large" });
      } else {
        setFile(selectedFile);
        setFileName(selectedFile.name);
        onSelectFile && onSelectFile(selectedFile);
        setErrors({ ...errors, file: null });
      }
    }
  };

  const handleDelete = () => {
    setFile(null);
    setFileName("");
    setSubject("");
    setGrade();
    setCategory("");
    setDescription("");
    hiddenFileInput.current.value = null;
    onDeleteFile && onDeleteFile();
  };

  const handleSubmit = async () => {
    const newErrors = {};

    // Validation logic
    if (!file) newErrors.file = "File is required";
    if (!fileName) newErrors.fileName = "File name is required";
    if (fileName.length < 5 || fileName.length > 50)
      newErrors.fileName = "File name must be between 5 and 50 characters";
    if (!subject) newErrors.subject = "Subject is required";
    if (subject.length < 2 || subject.length > 25)
      newErrors.subject = "Subject must be between 2 and 25 characters";
    if (!grade) newErrors.grade = "Grade is required";
    if (!grades.includes(grade))
      newErrors.grade = "Grade must be a valid grade";
    if (!year) newErrors.year = "Year is required";
    if (year < 2000 || year > new Date().getFullYear())
      newErrors.year = "Year must be between 2000 and the current year";
    if (!category) newErrors.category = "Category is required";
    if (category.length < 5 || category.length > 20)
      newErrors.category = "Category must be between 5 and 20 characters";
    if (!description) newErrors.description = "Description is required";
    if (description.length > 300)
      newErrors.description = "Description must be less than 300 characters";

    setErrors(newErrors);

    // If no errors, proceed with the POST request
    if (Object.keys(newErrors).length === 0) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", fileName);
      formData.append("subject", subject);
      formData.append("grade", grade);
      formData.append("year", year);
      formData.append("category", category);
      formData.append("description", description);

      try {
        // Send POST request to backend
        const response = await axios.post(
          "http://localhost:5000/api/uploads",
          formData
        );
        console.log("Response:", response);
        setResponseMessage("File added successfully!");
      } catch (error) {
        console.error(
          "Error adding file:",
          error.response?.data || error.message
        );
        setResponseMessage("Error adding file");
      }
    }
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="file-uploader">
      <div
        color={colors.navy[500]}
        className={`file-div ${disabled && "disabled"}`}
      >
        <Button
          color={colors.navy[500]}
          onClick={handleClick}
          disabled={disabled}
        >
          <AttachmentIcon color={colors.navy[500]} />
          <input
            type="file"
            accept={accept}
            ref={hiddenFileInput}
            onChange={handleChange}
            hidden
            disabled={disabled}
          />
          <div className="file-name" color={colors.navy[500]}>
            {file ? <div>{fileName}</div> : <div>Choose file</div>}
          </div>
        </Button>
        {errors.file && <div className="error">{errors.file}</div>}
      </div>
      <TextField
        label="File Name"
        color={colors.navy[500]}
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        disabled={disabled}
        error={!!errors.fileName}
        helperText={errors.fileName}
      />
      <TextField
        select
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        disabled={disabled}
        error={!!errors.subject}
        helperText={errors.subject}
      >
        {subjects.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        disabled={disabled}
        error={!!errors.grade}
        helperText={errors.grade}
      >
        {grades.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={disabled}
        error={!!errors.category}
        helperText={errors.category}
      >
        {categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Year"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        disabled={disabled}
        error={!!errors.year}
        helperText={errors.year}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={disabled}
        error={!!errors.description}
        helperText={errors.description}
        multiline
        rows={4}
        color={colors.navy[500]}
      />
      <IconButton
        aria-label="delete"
        disabled={disabled}
        onClick={handleDelete}
      >
        <DeleteIcon />
      </IconButton>
      <Button
        color="white"
        type="submit"
        onClick={handleSubmit}
        disabled={disabled}
      >
        File Upload
      </Button>
      <div>{responseMessage && <p>{responseMessage}</p>}</div>
    </div>
  );
}

export default FileUpload;
