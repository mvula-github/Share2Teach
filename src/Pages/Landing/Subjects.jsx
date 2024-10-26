import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Subjects.css';

const Subjects = ({ category }) => {
    const location = useLocation();
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [error, setError] = useState('');

    // to get search results from location state
    const searchResults = location.state?.searchResults;

    // Fetch subjects and documents from the database
    useEffect(() => {
        const getSubjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/documents');
                setSubjects(response.data);
            } catch (error) {
                setError('Unable to fetch subjects and documents');
            }
        };

        // if there is no search
        if (!searchResults)getSubjects();
    }, [searchResults]);

    // Open a document in a new tab
    const handlePreview = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/documents/preview/${id}`);
            window.open(`http://localhost:5000${response.data.fileUrl}`, '_blank');
        } catch (error) {
            setError('Cannot open the document');
        }
    };

 

    // Download a document
    const handleDownload = async (id, docTitle) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/documents/download/${id}`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${docTitle}.pdf`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            setError('Could not download document');
        }
    };

    // Filter subjects based on the selected category from the navbar and also from the search results
    const filteredSubjects = 
        category === "all"
        ? subjects
        : subjects.filter((subject) => subject.category === category);

    return (
        <div className='subject-container'>
            <div className='header'>
                <h1>Subjects</h1>
            </div>
            
            {error && <p className='error-message'>{error}</p>}

            {/* Subject Blocks */}
            <div className='subject-blocks-container'>
                {filteredSubjects.length > 0 ? (
                    filteredSubjects.map((subject) => (
                        <div
                            key={subject._id}
                            className={`subject-block ${selectedSubject === subject._id ? 'active' : ''}`}
                            onClick={() => setSelectedSubject(subject._id === selectedSubject ? null : subject._id)}
                        >
                            {subject.subject}
                        </div>
                    ))
                ) : (
                    <p>No subjects found</p>
                )}
            </div>

            {/* Display the documents for the selected subjects */}
            {selectedSubject && (
                <div className='subject-documents'>
                    {filteredSubjects
                        .filter((subject) => subject._id === selectedSubject)
                        .map((subject) => (
                            <div key={subject._id}>
                                <h2>{subject.subject}</h2>
                                <ul>
                                    {subject.documents.map((doc) => (
                                        <li key={doc._id}>
                                            <span>{doc.title}</span>
                                            <div className='document-actions'>
                                                <button onClick={() => handlePreview(doc._id)}>View</button>
                                                <button onClick={() => handleDownload(doc._id, doc.title)}>Download</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

Subjects.propTypes ={
    category: PropTypes.string.isRequired,
};

export default Subjects;