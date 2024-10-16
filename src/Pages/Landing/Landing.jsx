/* eslint-disable no-unused-vars */
import React from "react";
import "./Landing.css";
import { INFO } from "../../Utilities/Landing-data";
import NavBar from "../../Components/NavBar/NavBar";
import SearchBox from "../../Components/SearchBox/SearchBox";
import InfoPanel from "./InfoPanel/InfoPanel";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-page">
      {/* --------------------------------------------------------------------------- */}
      <NavBar />
      <div className="landing-top-section">
        <h1 className="usp-heading">Share and Inspire</h1>
        <p className="usp-text">
          Your one-stop spot for highend quality education resources
        </p>
        <SearchBox />
      </div>

      {/* ------------------------------------------------------------------------- */}

      <div className="landing-mid-section">
        <div className="landing-info-panel">
          {INFO.map((item) => (
            <InfoPanel
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* ------------------------------------------------------------------------ */}

        <div className="landing-hero-section">
          <div className="hero-section">
            <img src="../../../assets/img2.jpg" alt="" />
            <div>
              <h4>Discover, Learn, Grow</h4>
              <p>
                {" "}
                Our platform offers a diverse range of resources, including
                interactive worksheets, engaging videos, and comprehensive
                lesson plans. Whether you are studying for exams, exploring new
                subjects, or simply looking to expand your knowledge, Discover,
                Learn, Grow has everything you need to succeed.
              </p>
            </div>
          </div>
          <div className="landing-hero-section">
            <div className="hero-section">
              <img src="../../../assets/dog.svg" alt="" />
              <div>
                <h4>Heading</h4>
                <p>
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem vel laborum exercitationem quos. Placeat eum, tempore
                  corporis illum repellendus modi, eius reprehenderit quibusdam
                  tempora vel, natus labore non sed vero!
                </p>
              </div>
            </div>

            <div className="hero-section">
              <img
                className="hide-pic"
                src="../../../assets/student-climbing.png"
                alt=""
              />
              <div>
                <h4>Quality Educational Resources</h4>
                <p>
                  {" "}
                  Our platform provides a vast collection of carefully curated
                  resources designed to spark curiosity, foster critical
                  thinking, and empower learners of all ages. Whether you are a
                  student looking to supplement your classroom learning or a
                  teacher seeking innovative resources, Ignite Learning has
                  something to offer.
                </p>
                <div className="hero-section">
                  <div>
                    <h4>Heading</h4>
                    <p>
                      {" "}
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolorem vel laborum exercitationem quos. Placeat eum,
                      tempore corporis illum repellendus modi, eius
                      reprehenderit quibusdam tempora vel, natus labore non sed
                      vero!
                    </p>
                  </div>
                  <img src="../../../assets/dog.svg" alt="" />
                </div>
              </div>
              <img
                className="show-pic"
                src="../../../assets/student-climbing.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="landing-more-info">
          <div>
            <h4>Logo</h4>

            <button>login</button>
          </div>

          <div className="landing-bottom-section">
            <div className="landing-teacher-info">
              <h1> Are you an Educator?</h1>
              <p>
                Join a commnunity of educators who share innovative ideas and
                revolutionize your classes
              </p>
            </div>
            <Footer />
          </div>
        </div>
        <div>
          <h4>For Educators</h4>

          <ul>
            <a href="#">
              <li>learn more</li>
            </a>
            <Link to="/signup">
              <li>apply</li>
            </Link>{" "}
            {/* Direct link to Sign-Up */}
          </ul>
        </div>

        <div>
          <h4>Platform</h4>

          <ul>
            <li>
              <Link to="/about-us">about us</Link>
            </li>
            <li>
              <Link to="/oer">OER</Link>
            </li>
            <a href="#">
              <li>contact us</li>
            </a>
            <a href="#">
              <li>self-directed learning</li>
            </a>
            <a href="#">
              <li>FAQ</li>
            </a>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>

          <ul>
            <a href="#">
              <li>temrs</li>
            </a>
            <a href="#">
              <li>privacy policy</li>
            </a>
            <a href="#">
              <li>disclaimer</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
