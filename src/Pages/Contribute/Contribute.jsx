import React, { useState } from 'react';
import Modal from 'react-modal';

const Contribute = () => {
  const [role, setRole] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState([]);
  const [grade, setGrade] = useState('');
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState('');
  const [visibility, setVisibility] = useState('Public');
  const [expirationDate, setExpirationDate] = useState('');
  const [notifyUsers, setNotifyUsers] = useState(false);
  const [licenseAgreement, setLicenseAgreement] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formType, setFormType] = useState('highSchool'); // New state to handle form type
  const [category, setCategory] = useState(''); // New state for category
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query

  // Define categories
  const categories = {
    'High School': [
      'Mathematics', 'Physical Science', 'Life Science', 'History', 'Geography',
      'Economics', 'Accounting', 'Business Studies', 'English', 'Sepedi',
      'Setswana', 'Sesotho', 'Afrikaans', 'IsiZulu', 'IsiXhosa',
      'Computer Applications Technology', 'Information Technology',
      'Engineering Graphics and Design', 'Tourism', 'Life Orientation'
    ],
    'Tertiary': [
      'Financial Accounting', 'Business Management', 'Introductory to Computer Science',
      'Information Security', 'Systems Analysis and Design', 'Psychology',
      'Statistics', 'Law of Contracts', 'Economics',
      'IT Development'
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handling form submission logic here
      console.log({
        role,
        title,
        description,
        subject,
        grade,
        file,
        tags,
        visibility,
        expirationDate,
        notifyUsers,
        licenseAgreement,
      });
    }
  };

  const handleReset = () => {
    setRole('');
    setTitle('');
    setDescription('');
    setSubject([]);
    setGrade('');
    setFile(null);
    setTags('');
    setVisibility('Public');
    setExpirationDate('');
    setNotifyUsers(false);
    setLicenseAgreement(false);
    setCategory(''); // Reseting category
    setSearchQuery(''); // Reseting search query
    setFormErrors({});
  };
//Input validation
  const validateForm = () => {
    const errors = {};
    if (!role) errors.role = 'Role is required';
    if (!title) errors.title = 'Title is required';
    if (!description) errors.description = 'Description is required';
    if (!subject.length) errors.subject = 'Subject/Module is required';
    if (!grade) errors.grade = 'Grade/Level is required';
    if (!file) errors.file = 'File is required';
    if (!licenseAgreement) errors.licenseAgreement = 'You must agree to the terms';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 10485760 && [
      'application/pdf',
      'application/msword',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
      'image/png',
      'image/jpeg',
    ].includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      setFormErrors({ ...formErrors, file: 'Invalid file type or size (max 10MB)' });
    }
  };

  const handleAgreementChange = (e) => {
    setLicenseAgreement(e.target.checked);
    if (e.target.checked) {
      setIsModalOpen(false); // Closing modal when checked
    }
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
    setCategory(''); // Reseting category when changing form type
    setSubject([]); // Clearing selected subjects when switching form types
    setSearchQuery(''); // Reseting search query when changing form type
  };

  const filteredSubjects = formType === 'highSchool'
    ? categories['High School'].filter(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
    : categories['Tertiary'].filter(mod => mod.toLowerCase().includes(searchQuery.toLowerCase()));

  const filteredByCategory = filteredSubjects.filter(sub => category === '' || sub === category);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="Founder">Founder</option>
          <option value="Administrator">Administrator</option>
          <option value="Moderator">Moderator</option>
          <option value="Educator">Educator</option>
        </select>
        {formErrors.role && <span>{formErrors.role}</span>}
      </div>

      <div>
        <label>Document Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        {formErrors.title && <span>{formErrors.title}</span>}
      </div>

      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        {formErrors.description && <span>{formErrors.description}</span>}
      </div>

      <div>
        <label>Form Type:</label>
        <button type="button" onClick={() => handleFormTypeChange('highSchool')}>High School</button>
        <button type="button" onClick={() => handleFormTypeChange('tertiary')}>Tertiary</button>
      </div>

      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          {filteredSubjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
        </select>
      </div>

      <div>
        <label>Search Modules:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search modules..."
        />
      </div>

      <div>
        <label>Subject/Module:</label>
        <select multiple value={subject} onChange={(e) => setSubject([...e.target.selectedOptions].map(option => option.value))}>
          <optgroup label={formType === 'highSchool' ? 'High School Subjects' : 'Tertiary Modules'}>
            {filteredByCategory.map(mod => <option key={mod} value={mod}>{mod}</option>)}
          </optgroup>
        </select>
        {formErrors.subject && <span>{formErrors.subject}</span>}
      </div>

      <div>
        <label>Grade/Level:</label>
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
        {formErrors.grade && <span>{formErrors.grade}</span>}
      </div>

      <div>
        <label>Upload File:</label>
        <input type="file" onChange={handleFileChange} />
        {file && <span>{file.name}</span>}
        {formErrors.file && <span>{formErrors.file}</span>}
      </div>

      <div>
        <label>Tags:</label>
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
      </div>

      <div>
        <label>Visibility:</label>
        <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
          <option value="Restricted">Restricted</option>
        </select>
        <span title="Public: Visible to everyone. Private: Only visible to you. Restricted: Visible to specific roles.">?</span>
      </div>

      <div>
        <label>Expiration Date:</label>
        <input type="date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
      </div>



      <div>
        <label>
          <input type="checkbox" checked={notifyUsers} onChange={(e) => setNotifyUsers(e.target.checked)} />
          Notify users when the document is uploaded
        </label>
      </div>

      <div>
        <span onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>License or Terms of Use</span>
        {formErrors.licenseAgreement && <span>{formErrors.licenseAgreement}</span>}
      </div>

      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Clear</button>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <h2>License or Terms of Use</h2>
        <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
          <p>Agree to the terms dude, don't be childish!</p>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={licenseAgreement} onChange={handleAgreementChange} required />
            I agree to the terms and conditions
          </label>
        </div>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </form>
  );
};

export default Contribute;
