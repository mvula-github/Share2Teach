/* eslint-disable no-unused-vars */
import React from "react"; // About Us page for Share2Teach
import "./AboutUs.css"; // We'll write this stylesheet below
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="title">About Us</h1>
      <p className="description">
        Share2Teach is introduced as a vibrant open educational resource (OER)
        project crafted to nurture a global community of learners and educators.
        At its core lies the principle that knowledge should be accessible,
        collaborative, and freely available. Share2Teach is a testament to the
        power of collective endeavour, co-crafted by students under the guidance
        of their facilitators.
      </p>
      <p className="description">
        The project was initiated by Dr. Chantelle Bosch, a dedicated lecturer
        and sub-area leader for Blended Learning to Enhance Self-Directed
        Learning within the Research Unit Self-Directed Learning at the
        North-West University (NWU). Alongside her, Prof. Dorothy Laubscher, the
        chair-holder of the UNESCO Chair on Mul-modal Learning and OER, has
        played a pivotal role in shaping the vision and trajectory of
        Share2Teach.
      </p>
      <p className="description">
        Together, a platform has been cultivated where diverse educational
        resources are brought to life, crafted by students for students. From
        comprehensive semester planning documents to topic-specific insights,
        Share2Teach offers a wide array of materials tailored to enhance
        self-directed learning through cooperative learning and project-based
        teaching strategies.
      </p>
      <p className="description">
        Share2Teach serves as a beacon for educational innovation, extending an
        invitation to educators and learners worldwide to contribute, explore,
        and evolve within this open, inclusive community. Joining this journey
        means participating in the endeavour to transform learning into a shared
        adventure, dismantling barriers and erecting bridges toward a more
        knowledgeable and interconnected world.
      </p>

      <h2 className="founders-title">Meet the Founders</h2>

      <div className="founders">
        {/* Jane Doe's bubble */}
        <div className="founder-bubble">
          <img src="founder1.jpg" alt="Founder 1" className="founder-img" />
          <h3>Jane Doe</h3>
          <p className="founder-role">Stakeholder & Educator</p>
          <p className="founder-bio">
            Jane has a passion for education and has been teaching for over 10
            years. She co-founded Share2Teach to help students access
            high-quality learning resources.
          </p>
        </div>

        {/* John Smith's bubble */}
        <div className="founder-bubble">
          <img src="founder2.jpg" alt="Founder 2" className="founder-img" />
          <h3>John Smith</h3>
          <p className="founder-role">Stakeholder</p>
          <p className="founder-bio">
            John is a full-stack developer who believes in the power of
            technology to enhance education. He built the Share2Teach platform
            to bridge gaps in academic resources.
          </p>
        </div>
      </div>

      <h2 className="development-title">Meet the development</h2>

      <div className="developer">
        {/* Jane Doe's bubble */}
        <div className="developer-bubble">
          <img
            src="developer1.jpg"
            alt="developer 1"
            className="developer-img"
          />
          <h3>Mvula Kolweni</h3>
          <p className="developer-role">Backend Developer</p>
          <p className="developer-bio">
            Jane has a passion for education and has been teaching for over 10
            years. She co-founded Share2Teach to help students access
            high-quality learning resources.
          </p>
        </div>

        <div className="developer-bubble">
          <img
            src="developer1.jpg"
            alt="developer 1"
            className="developer-img"
          />
          <h3>Nick Mokgotlane</h3>
          <p className="developer-role">Backend Developer</p>
          <p className="developer-bio">
            Jane has a passion for education and has been teaching for over 10
            years. She co-founded Share2Teach to help students access
            high-quality learning resources.
          </p>
        </div>

        <div className="developer-bubble">
          <img
            src="developer1.jpg"
            alt="developer 1"
            className="developer-img"
          />
          <h3>Olwethu Zungu</h3>
          <p className="developer-role">Frontend Developer</p>
          <p className="developer-bio">
            Jane has a passion for education and has been teaching for over 10
            years. She co-founded Share2Teach to help students access
            high-quality learning resources.
          </p>
        </div>

        {/* John Smith's bubble */}
        <div className="developer-bubble">
          <img
            src="developer.jpg"
            alt="developer 2"
            className="developer-img"
          />
          <h3>Jameela Sparks</h3>
          <p className="developer-role">Frontend Developer</p>
          <p className="developer-bio">
            John is a full-stack developer who believes in the power of
            technology to enhance education. He built the Share2Teach platform
            to bridge gaps in academic resources.
          </p>
        </div>
      </div>

      {/* Back Link */}
      <p className="back-link">
        <Link to="/">Back</Link>
      </p>
    </div>
  );
};

export default AboutUs;
