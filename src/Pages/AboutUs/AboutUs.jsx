import React from 'react'; // About Us page for Share2Teach
import './AboutUs.css'; // We'll write this stylesheet below
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="title">About Us</h1>
      <p className="description">
        Share2Teach is an educational platform that allows students to explore past papers and self-directed learning materials. 
        Educators with expertise contribute their resources to help others succeed academically. 
      </p>

      <h2 className="founders-title">Meet the Founders</h2>
      
      <div className="founders">
        {/* Jane Doe's bubble */}
        <div className="founder-bubble">
          <img src="founder1.jpg" alt="Founder 1" className="founder-img" />
          <h3>Jane Doe</h3>
          <p className="founder-role">Co-Founder & Educator</p>
          <p className="founder-bio">
            Jane has a passion for education and has been teaching for over 10 years. She co-founded Share2Teach to help students access high-quality learning resources.
          </p>
        </div>

        {/* John Smith's bubble */}
        <div className="founder-bubble">
          <img src="founder2.jpg" alt="Founder 2" className="founder-img" />
          <h3>John Smith</h3>
          <p className="founder-role">Co-Founder & Developer</p>
          <p className="founder-bio">
            John is a full-stack developer who believes in the power of technology to enhance education. He built the Share2Teach platform to bridge gaps in academic resources.
          </p>
        </div>
      </div>

      {/* Back Link */}
      <p className="back-link">
        <Link to="/">Back</Link>
      </p>
    </div>
  );
}

export default AboutUs;