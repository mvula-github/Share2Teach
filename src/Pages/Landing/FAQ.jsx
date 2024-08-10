import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [helpful, setHelpful] = useState({});

  const faqs = {
    contributing: [
      {
        question: 'How can I contribute documents?',
        answer: 'You can contribute documents by filling out the form on the Contribute Documents page and sending a request to the admin.',
      },
      {
        question: 'Is there a limit to the number of documents I can contribute?',
        answer: 'No, there is no limit to the number of documents you can contribute.',
      },
    ],
    access: [
      {
        question: 'Who can access the shared study materials?',
        answer: 'All registered users can access the shared study materials.',
      },
      {
        question: 'Can I edit or delete my contributions?',
        answer: 'Yes, you can edit or delete your contributions by contacting the admin.',
      },
    ],
    technical: [
      {
        question: 'How do I contact the admin?',
        answer: 'You can contact the admin by sending an email through the contact form on the website.',
      },
    ],
  };

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
        <div key={catIndex}>
          <h3>{category.replace(/^\w/, c => c.toUpperCase())}</h3>
          {filteredFAQs[category].map((faq, index) => (
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
          ))}
        </div>
      ))}
      <div>
        <p>Didn’t find what you were looking for? <a href="s2t@nwu.ac.za">Contact us!</a></p>
      </div>
      <div>
        <p>Last Updated: December 26, 2023</p>
      </div>
    </div>
  );
};

export default FAQ;
