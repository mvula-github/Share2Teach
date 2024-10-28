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
        <div className="founder-bubble">
          <img src="founder1.jpg" alt="Founder 1" className="founder-img" />
          <h3>Heiki Pelser</h3>
          <p className="founder-role">Stakeholder & Lecture</p>
          <p className="founder-bio">
            Heiki has a passion for education and has been teaching for over 10
            years. He co-founded Share2Teach to help students access
            high-quality learning resources.
          </p>
        </div>

        <div className="founder-bubble">
          <img src="founder2.jpg" alt="Founder 2" className="founder-img" />
          <h3>John Klerck</h3>
          <p className="founder-role">Stakeholder</p>
          <p className="founder-bio">
            John is a full-stack developer who believes in the power of
            technology to enhance education. He co-founded the Share2Teach
            platform to bridge gaps in academic resources.
          </p>
        </div>
      </div>

      <h2 className="development-title">Meet the Development Team</h2>

      <div className="developer">
        {/* Jane Doe's bubble */}
        <div className="developer-bubble">
          <img
            src="../../public/assets/dev_team/Mvula.jpg"
            alt="developer 1"
            className="developer-img"
          />
          <h3>Mvula Kolweni</h3>
          <p className="developer-role">Developer</p>
          <p className="developer-bio">
            Your typical IT specialist, a tech-savvy problem-solver at heart,
            skilled in various programming languages/frameworks,catching up with
            the latest tools, and driven by a passion of technology.
          </p>
        </div>

        <div className="developer-bubble">
          <img
            src="../../assets/dev_team/Nick_Dev.jpg"
            alt="developer 1"
            className="developer-img"
          />
          <h3>Nick Mokgotlane</h3>
          <p className="developer-role">Developer</p>
          <p className="developer-bio">
            A passionate software developer with a keen interest in
            cybersecurity. Thrives on creating innovative solutions while
            ensuring robust security measures are in place in whatever he
            develops.
          </p>
        </div>

        <div className="developer-bubble">
          <img
            src="../../assets/dev_team/Olwethu.jpg"
            alt="developer 1"
            className="developer-img"
          />
          <h3>Olwethu Zungu</h3>
          <p className="developer-role">Developer</p>
          <p className="developer-bio">
            An aspiring IT specialist interested in software and web
            development, and data analytics. Her goal is to learn more about the
            IT industry to expand her existing skillset to develop programs.
            databases
          </p>
        </div>

        {/* John Smith's bubble */}
        <div className="developer-bubble">
          <img
            src="../../assets/dev_team/Jameela.jpg"
            alt="developer 2"
            className="developer-img"
          />
          <h3>Jameela Sparks</h3>
          <p className="developer-role">Developer</p>
          <p className="developer-bio">
            A developer with an interest in databases and cybersecurity,
            moreover wants to improve her skills, and wants to explore
            unconventional ways and techniques to solve problems.
          </p>
        </div>
      </div>

      {/* Back Link */}
      <p className="back-link">
        <Link to="/home">Back</Link>
      </p>
    </div>
  );
};

export default AboutUs;
