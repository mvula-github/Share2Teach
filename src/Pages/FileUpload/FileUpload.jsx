import React, { useRef, useState, useEffect } from "react";
import { Button, IconButton, TextField, MenuItem } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import DeleteIcon from "@mui/icons-material/Delete";
import "./FileUpload.css";
import mockData from "./mockData.json"; // Import mock data


/*const subjects = ["Math", "Science", "History"]; // Example subjects
const grades = ["Grade R", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"]; // Example grades
*/
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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    //fetchSubjects();
    //fetchGrades();

    // Use mock data for subjects and grades
    setSubjects(mockData.subjects);
    setGrades(mockData.grades);
  }, []);

  /*
  const fetchSubjects = async () => {
    try {
      const response = await fetch("/api/subjects");
      const data = await response.json();
      setSubjects(data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchGrades = async () => {
    try {
      const response = await fetch("/api/grades");
      const data = await response.json();
      setGrades(data);
    } catch (error) {
      console.error("Error fetching grades:", error);
    }
  };
*/
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const selectedFile = event.target.files; // Access the first file
    if (selectedFile) {
      if (selectedFile.size > 30 * 1024 * 1024) {
        setErrors({ ...errors, file: "File too large" });
      } else if (!accept.includes(selectedFile.type)) {
        setErrors({ ...errors, file: "Incorrect file type" });
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
    hiddenFileInput.current.value = null;
    onDeleteFile && onDeleteFile();
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!file) newErrors.file = "File is required";
    if (!fileName) newErrors.fileName = "File name is required";
    if (fileName.length < 5 || fileName.length > 50) newErrors.fileName = "File name must be between 5 and 50 characters";
    if (!subject) newErrors.subject = "Subject is required";
    if (subject.length < 2 || subject.length > 25) newErrors.subject = "Subject must be between 2 and 25 characters";
    if (!grade) newErrors.grade = "Grade is required";
    if (!grades.includes(grade)) newErrors.grade = "Grade must be a valid grade";
    if (!year) newErrors.year = "Year is required";
    if (year < 2000 || year > new Date().getFullYear()) newErrors.year = "Year must be between 2000 and the current year";
    if (!category) newErrors.category = "Category is required";
    if (category.length < 5 || category.length > 20) newErrors.category = "Category must be between 5 and 20 characters";
    if (!description) newErrors.description = "Description is required";
    if (description.length > 300) newErrors.description = "Description must be less than 300 characters";
    setErrors(newErrors);

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
        const response = await fetch("/api/uploads", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        if (response.ok) {
          console.log("File uploaded successfully", result);
        } else {
          console.error("File upload failed", result);
        }
      } catch (error) {
        console.error("File upload failed", error);
      }
    }
  };

  return (
    <div className="file-uploader">
      <div className={`file-div ${disabled && "disabled"}`}>
        <Button onClick={handleClick} disabled={disabled}>
          <AttachmentIcon />
          <input
            type="file"
            accept={accept}
            ref={hiddenFileInput}
            onChange={handleChange}
            hidden
            disabled={disabled}
          />
          <div className="file-name">
            {file ? <div>{fileName}</div> : <div>Choose file</div>}
          </div>
        </Button>
        {errors.file && <div className="error">{errors.file}</div>}
      </div>
      <TextField
        label="File Name"
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
        label="Year"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        disabled={disabled}
        error={!!errors.year}
        helperText={errors.year}
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={disabled}
        error={!!errors.category}
        helperText={errors.category}
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
      />
      <IconButton
        aria-label="delete"
        disabled={disabled}
        color="primary"
        onClick={handleDelete}
      >
        <DeleteIcon />
      </IconButton>
      <Button onClick={handleSubmit} disabled={disabled}>
        FileUpload
      </Button>
    </div>
  );
}

export default FileUpload;