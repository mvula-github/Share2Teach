import React, { useState, useEffect } from 'react';
import mockFAQs from './mockFAQs';
//import axios from 'axios';

const FAQItem = ({ faq, index, category, activeIndex, toggleFAQ, handleHelpful, helpful }) => (
  <div key={index}>
    <h4 onClick={() => toggleFAQ(index, category)} style={{ cursor: 'pointer' }}>
      {faq.question}
    </h4>
    {activeIndex === `${category}-${index}` && (
      <div>
        <p>{faq.answer}</p>
        <div>
          <span>Was this helpful?</span>
          <button onClick={() => handleHelpful(index, category, true)}>Yes</button>
          <button onClick={() => handleHelpful(index, category, false)}>No</button>
          {helpful[`${category}-${index}`] !== undefined && (
            <span>{helpful[`${category}-${index}`] ? 'Thank you!' : 'Sorry to hear that.'}</span>
          )}
        </div>
      </div>
    )}
  </div>
);

const FAQCategory = ({ category, faqs, activeIndex, toggleFAQ, handleHelpful, helpful }) => (
  <div>
    <h3>{category.replace(/^\w/, c => c.toUpperCase())}</h3>
    {faqs.map((faq, index) => (
      <FAQItem
        key={index}
        faq={faq}
        index={index}
        category={category}
        activeIndex={activeIndex}
        toggleFAQ={toggleFAQ}
        handleHelpful={handleHelpful}
        helpful={helpful}
      />
    ))}
  </div>
);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [helpful, setHelpful] = useState({});
  const [faqs, setFaqs] = useState({});

  useEffect(() => {
    // Using mock data for testing
    setFaqs(mockFAQs);
  }, []);

  const toggleFAQ = (index, category) => {
    setActiveIndex(activeIndex === `${category}-${index}` ? null : `${category}-${index}`);
  };

  const handleHelpful = (index, category, value) => {
    setHelpful({ ...helpful, [`${category}-${index}`]: value });
  };

  const filteredFAQs = Object.keys(faqs).reduce((acc, category) => {
    acc[category] = faqs[category].filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return acc;
  }, {});

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <input
        type="text"
        placeholder="Search questions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {Object.keys(filteredFAQs).map((category, catIndex) => (
        <FAQCategory
          key={catIndex}
          category={category}
          faqs={filteredFAQs[category]}
          activeIndex={activeIndex}
          toggleFAQ={toggleFAQ}
          handleHelpful={handleHelpful}
          helpful={helpful}
        />
      ))}
      <div>
        <p>Didn’t find what you were looking for? <a href="/contact">Contact us!</a></p>
      </div>
      <div>
        <p>Last Updated: December 26, 2024</p>
      </div>
    </div>
  );
};

export default FAQ;
