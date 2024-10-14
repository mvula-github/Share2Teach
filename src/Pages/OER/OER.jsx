import React, { useState, useEffect } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import axios from 'axios';
import './OER.css';

// Configure axios with a base URL
const axiosInstance = axios.create({
    baseURL: 'http://your-api-url.com/api', // Change this to your API URL
});

// UploadForm Component
const UploadForm = ({ onUploadSuccess }) => {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('subject', subject);
        formData.append('grade', grade);
        formData.append('file', file);

        try {
            await axiosInstance.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Upload successful');
            if (onUploadSuccess) onUploadSuccess(); // Notify parent component
        } catch (error) {
            console.error('Error uploading file', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="upload-form">
            <label>
                Paper Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                Subject:
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </label>
            <label>
                Grade Level:
                <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required />
            </label>
            <label>
                Upload File:
                <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

// PapersList Component
const PapersList = ({ refresh }) => {
    const [papers, setPapers] = useState([]);
    const [hasError, setHasError] = useState(false); // New error state

    useEffect(() => {
        const fetchPapers = async () => {
            console.log('Fetching papers...'); // Log to see if the fetch is triggered
            try {
                const response = await axiosInstance.get('/papers');
                console.log('Papers fetched:', response.data); // Log the response data
                setPapers(response.data);
            } catch (error) {
                console.error('Error fetching papers', error);
                setHasError(true); // Set error state if there is an issue
            }
        };
        fetchPapers();
    }, [refresh]); // Re-fetch papers when `refresh` changes

    // If there’s an error, display fallback UI
    if (hasError) {
        return <div>Error loading papers. Please try again later.</div>;
    }

    return (
        <div className="papers-list">
            <input
                type="text"
                placeholder="Search papers..."
                // Add state and handler for search if needed
            />
            <ul>
                {papers.map(paper => (
                    <li key={paper._id}>
                        <h3>{paper.title}</h3>
                        <p>Subject: {paper.subject}</p>
                        <p>Grade Level: {paper.grade}</p>
                        <a href={paper.fileUrl} download>Download</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// OER Component
const OER = () => {
    const [refresh, setRefresh] = useState(false);
    const [hasError, setHasError] = useState(false); // New error state

    const handleUploadSuccess = () => {
        setRefresh(!refresh); // Toggle refresh state to re-fetch papers
    };

    // Optional: use a try-catch around the return statement to catch any rendering errors
    try {
        return (
            <div className="oer-container">
                <h1>Open Educational Resources (OER)</h1>
                <section className="upload-section">
                    <h2>Upload a Past Paper</h2>
                    <UploadForm onUploadSuccess={handleUploadSuccess} />
                </section>
                <section className="papers-section">
                    <h2>Available Past Papers</h2>
                    <PapersList refresh={refresh} />
                </section>
            </div>
        );
    } catch (error) {
        setHasError(true); // Set error state if there's a rendering issue
        console.error('Rendering error:', error);
    }

    // If there’s an error, display fallback UI
    return hasError ? <div>Error loading page. Please try again later.</div> : null;
};

export default OER;
