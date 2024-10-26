/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  IconButton,
  TextField,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import "./Moderate.css";
import axios from "axios";
import Header from "../AdminPage/Header";

function Moderate() {
  const [files, setFiles] = useState([]);
  const [comments, setComments] = useState({});
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/uploads");
      const data = response.data;

      // Check if data is an array; if not, adjust as needed
      const files = Array.isArray(data) ? data : data.files || []; // Adjust if 'files' key is present
      const filesToModerate = files.filter((file) => !file.approved);

      setFiles(filesToModerate);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/uploads/${id}/approve`
      );
      if (response.status === 201) {
        fetchFiles(); // Refresh the list after approval
      } else {
        console.error("Error approving file");
      }
    } catch (error) {
      console.error("Error approving file:", error);
    }
  };

  const handleDisapprove = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/uploads/${id}/disapprove`
      );
      if (response.status === 200) {
        fetchFiles(); // Refresh the list after deletion
      } else {
        console.error("Error deleting file");
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const handleCommentChange = (id, value) => {
    setComments({ ...comments, [id]: value });
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <div className="moderate-page">
        <Header
          title="Moderation"
          subtitle="Approving or Disapproving documents"
        />
        {files.map((file) => (
          <Card key={file._id} className="file-card" color={colors.sky[500]}>
            <CardContent>
              <Typography variant="h6">{file.fileName}</Typography>
              <Typography variant="body2">Subject: {file.subject}</Typography>
              <Typography variant="body2">Grade: {file.grade}</Typography>
              <Typography variant="body2">Year: {file.year}</Typography>
              <Typography variant="body2">Category: {file.category}</Typography>
              <Typography variant="body2">
                Description: {file.description}
              </Typography>
              <a href={`/${file.userFile}`} download>
                Download File
              </a>
              <TextField
                label="Comments"
                value={comments[file._id] || ""}
                onChange={(e) => handleCommentChange(file._id, e.target.value)}
                fullWidth
                multiline
                rows={2}
                margin="normal"
              />
              <div>{responseMessage && <p>{responseMessage}</p>}</div>
              <div className="action-buttons">
                <IconButton
                  color="primary"
                  onClick={() => handleApprove(file._id)}
                >
                  <CheckIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleDisapprove(file._id)}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Moderate;
