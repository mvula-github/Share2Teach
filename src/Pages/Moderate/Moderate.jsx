import React, { useEffect, useState } from "react";
import { IconButton, TextField, Card, CardContent, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import "./Moderate.css";
import mockFiles from "./mockFiles.json"; //Import mock data

function Moderate() {
  const [files, setFiles] = useState([]);
  const [comments, setComments] = useState({});

  useEffect(() => {
    //fetchFiles();
    setFiles(mockFiles);
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/files");
      const data = await response.json();
      // Filter files that need moderation (not approved)
      const filesToModerate = data.filter(file => !file.approved);
      setFiles(filesToModerate);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      const response = await fetch(`/api/files/${id}/approve`, {
        method: "PATCH",
      });
      if (response.ok) {
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
      const response = await fetch(`/api/files/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
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

  return (
    <div className="moderate-page">
      <Typography variant="h4" gutterBottom>
        File Moderation
      </Typography>
      {files.map((file) => (
        <Card key={file._id} className="file-card">
          <CardContent>
            <Typography variant="h6">{file.fileName}</Typography>
            <Typography variant="body2">Subject: {file.subject}</Typography>
            <Typography variant="body2">Grade: {file.grade}</Typography>
            <Typography variant="body2">Year: {file.year}</Typography>
            <Typography variant="body2">Category: {file.category}</Typography>
            <Typography variant="body2">Description: {file.description}</Typography>
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
            <div className="action-buttons">
              <IconButton color="primary" onClick={() => handleApprove(file._id)}>
                <CheckIcon />
              </IconButton>
              <IconButton color="secondary" onClick={() => handleDisapprove(file._id)}>
                <CloseIcon />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Moderate;