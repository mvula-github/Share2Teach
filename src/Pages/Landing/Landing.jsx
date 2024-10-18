/* eslint-disable no-unused-vars */
import React from "react";
import "./Landing.css";
import { INFO } from "../../Utilities/Landing-data";
import NavBar from "../../Components/NavBar/NavBar";
import SearchBox from "../../Components/SearchBox/SearchBox";
import InfoPanel from "./InfoPanel/InfoPanel";
import Footer from "../../Components/Footer/Footer";

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
                resources designed to spark curiosity, foster critical thinking,
                and empower learners of all ages. Whether you are a student
                looking to supplement your classroom learning or a teacher
                seeking innovative resources, Ignite Learning has something to
                offer.
              </p>
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
    </div>
  );
};

export default Landing;
