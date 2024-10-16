import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Collapse, Button } from 'antd';
import mockFAQs from './mockFAQs'; // Import the mock JSON File
import './FAQ.css'; // Import the CSS file

const { Panel } = Collapse;

function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Fetch FAQs from the API
    /*axios.get('/api/faqs')
      .then(response => setFaqs(response.data))
      .catch(error => console.error('Error fetching FAQs:', error));
      
    */
    // Use mock data for testing
    setFaqs(mockFAQs);
  }, []);

  return (
    <div id="faq" className="faqs">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
        </div>
        {faqs.map((category, index) => (
          <div key={index} className="faqCategory">
            <h3>{category.category}</h3>
            <Collapse defaultActiveKey={['0']}>
              {category.questions.map((faq, idx) => (
                <Panel header={faq.question} key={idx}>
                  <p>{faq.answer}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
        ))}
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>Get quick support 24/7 with our dedicated users service team. We are here to help you get resources, answer any questions, and resolve any issues. Trust us to make your experience stress-free and enjoyable.</p>
          <Button type="primary" size="large" href="mailto:s2t@nwu.ac.za"><i className="fas fa-envelope"></i> Email your question</Button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;