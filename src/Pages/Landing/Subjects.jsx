
//import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import HomeIcon from '../../Components/HomeIcon/HomeIcon';
import './Subjects.css';

const Subjects = ({ category }) => {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [error, setError] = useState('');

    // Fetch subjects and documents from the database
    useEffect(() => {
        const getSubjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/documents');
                setSubjects(response.data);
            } catch (error) {
                setError('Could not fetch subjects and documents');
            }
        };

        getSubjects();
    }, []);

    // Open a document in a new tab
    const handlePreview = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/documents/preview/${id}`);
            window.open(`http://localhost:5000${response.data.fileUrl}`,_blank);
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
            link.setAttribute(`'download', ${docTitle}.pdf`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            setError('Download cannot be done');
        }
    };

    // Filter subjects based on the selected category from the navbar
    const filteredSubjects = subjects.filter((subject) => subject.category === category);

    return (
        <div className='subject-container'>
            <div className='header'>
                <h1>Subjects</h1>
                <HomeIcon />
                   {/*} <Link to="/">
                    <img 
                        src="home.jpg"
                        alt="home"
                        className='home-icon'
                    />
                    </Link>*/}
            </div>
            
            {error && <p className='error-message'>{error}</p>}

            {/* Subject Blocks */}
            <div className='subject-blocks-container'>
                {filteredSubjects.length > 0 ? (
                    filteredSubjects.map((subject) => (
                        <div
                           key={subject._id} 

                            className={ subject-block ${...selectedSubject === subject._id ? 'active' : ''}}

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