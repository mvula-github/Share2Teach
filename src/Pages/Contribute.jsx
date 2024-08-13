import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handling form submission logic
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
  };

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
      </div>

      <div>
        <label>Document Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div>
        <label>Subject:</label>
        <select multiple value={subject} onChange={(e) => setSubject([...e.target.selectedOptions].map(option => option.value))}>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Literature">Literature</option>
        </select>
      </div>

      <div>
        <label>Grade/Level:</label>
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
      </div>

      <div>
        <label>Upload File:</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
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
        <label>
          <input type="checkbox" checked={licenseAgreement} onChange={(e) => setLicenseAgreement(e.target.checked)} />
          I agree to the License or Terms of Use
        </label>
      </div>

      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Clear</button>
      </div>
    </form>
  );
};

export default Contribute;
