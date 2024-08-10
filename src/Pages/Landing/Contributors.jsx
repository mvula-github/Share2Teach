import React, { useState } from 'react';
import './Contributors.css'; // Import the CSS file

const Contributors = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Message: ${message}`);
    alert('Your request has been sent to the admin.');
  };

  const contributors = {
    founders: ['Dr. Chantelle Bosch', 'Mr. Johan Venter'],
    administrators: ['Mr. John Klerck', 'Mr. Heiki Pelser'],
    moderators: ['Prof. Dorothy Laubscher'],
    educators: ['Mr. Heystek Grobler'],
    resources: ['Mr. Nick Mogotlane', 'Mr. Mvula Kolweni', 'Miss Jameela Sparks', 'Miss Olwethu Zungu'],
  };

  const filteredContributors = {
    founders: contributors.founders.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase())),
    administrators: contributors.administrators.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase())),
    moderators: contributors.moderators.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase())),
    educators: contributors.educators.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase())),
    resources: contributors.resources.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase())),
  };

  return (
    <div className="contributor-container">
      <h2>Contribute Documents</h2>
      <form onSubmit={handleSubmit} className="contributor-form">
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Send Request</button>
      </form>
      <h3>Contributors</h3>
      <input
        type="text"
        placeholder="Search contributors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="contributors-list">
        <div className="category">
          <h4>Founders <span role="img" aria-label="founders">👑</span></h4>
          <ul>
            {filteredContributors.founders.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="category">
          <h4>Administrators <span role="img" aria-label="administrators">🛠️</span></h4>
          <ul>
            {filteredContributors.administrators.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="category">
          <h4>Moderators <span role="img" aria-label="moderators">🛡️</span></h4>
          <ul>
            {filteredContributors.moderators.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="category">
          <h4>Educators <span role="img" aria-label="educators">📘</span></h4>
          <ul>
            {filteredContributors.educators.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="category">
          <h4>Resource Contributors <span role="img" aria-label="resources">📚</span></h4>
          <ul>
            {filteredContributors.resources.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
