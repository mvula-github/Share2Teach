/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // For navigation
import "./OER.css";
import Header from "../AdminPage/Header";

const OER = () => {
  const [refresh, setRefresh] = useState(false);
  const [papers, setPapers] = useState([]);
  const [error, setError] = useState(null);

  const handleUploadSuccess = () => {
    setRefresh(!refresh); // Toggle refresh state to re-fetch papers
  };

  //   // Fetch papers from the API when component mounts or refresh changes
  //   useEffect(() => {
  //     const fetchPapers = async () => {
  //       setError(null); // Reset error state before fetching
  //       try {
  //         const response = await axios.get("localhost:5000/api/");
  //         setPapers(response.data);
  //       } catch (err) {
  //         console.error("Error fetching papers:", err);
  //         setError("Failed to load papers. Please try again."); // Set an error message
  //       }
  //     };

  //     fetchPapers();
  //   }, [refresh]);

  return (
    <div className="oer-container">
      <div className="the-header">
        <Header
          title="Other Educational Resources"
          subtitle="get extra resources"
        />
      </div>
      <div className="resource-grid">
        {/* Tutorials Section */}
        <Link to="/tutorials" className="resource-card">
          <div className="icon tutorials-icon"></div> {/* Icon for Tutorials */}
          <h2>Tutorials</h2>
          <p>Explore video tutorials contributed by experts.</p>
        </Link>

        {/* Authors Section */}
        <Link to="/authors" className="resource-card">
          <div className="icon authors-icon"></div> {/* Icon for Authors */}
          <h2>Authors</h2>
          <p>View and download documents from educators.</p>
        </Link>

        {/* Guides Section */}
        <Link to="/guides" className="resource-card">
          <div className="icon guides-icon"></div> {/* Icon for Guides */}
          <h2>Guides</h2>
          <p>Learn how to use the platform step-by-step.</p>
        </Link>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default OER;
