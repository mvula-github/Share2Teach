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
    <div>
      {/* --------------------------------------------------------------------------- */}
      <NavBar />
      <div className="landing-top-section">
        <h1 className="usp-heading">Share to Inspire</h1>
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
            <img className="hide-pic" src="../../../assets/dog.svg" alt="" />
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
            <img className="show-pic" src="../../../assets/dog.svg" alt="" />
          </div>
        </div>
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
  );
};

export default Landing;
