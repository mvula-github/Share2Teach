import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OER.css';

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
            await axios.post('/upload', formData, {
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

    useEffect(() => {
        const fetchPapers = async () => {
            try {
                const response = await axios.get('/papers');
                setPapers(response.data);
            } catch (error) {
                console.error('Error fetching papers', error);
            }
        };
        fetchPapers();
    }, [refresh]); // Re-fetch papers when `refresh` changes

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

    const handleUploadSuccess = () => {
        setRefresh(!refresh); // Toggle refresh state to re-fetch papers
    };

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
};

export default OER;
