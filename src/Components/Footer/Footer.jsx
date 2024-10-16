/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="landing-footer-info">
        <div className="footer-info">
          <h4>Logo</h4>

          <button>login</button>
        </div>

        <div className="footer-info">
          <h4>For Educators</h4>

          <ul>
            <a href="#">
              <li className="footer-item">learn more</li>
            </a>
            <a href="#">
              <Link to="/signup">
                <li>apply</li>
              </Link>{" "}
            </a>
          </ul>
        </div>

        <div className="footer-info">
          <h4>Platform</h4>

          <ul>
            <a href="#">
              <li>
                <Link to="/about-us">about us</Link>
              </li>
            </a>
            <a href="#">
              <li>
                <Link to="/oer">OER</Link>
              </li>
            </a>
            <a href="#">
              <li className="footer-item">self-directed learning</li>
            </a>
            <a href="#">
              <li className="footer-item">FAQ</li>
            </a>
          </ul>
        </div>

        <div className="footer-info">
          <h4>Legal</h4>

          <ul>
            <a href="#">
              <li className="footer-item">terms</li>
            </a>
            <a href="#">
              <li className="footer-item">privacy policy</li>
            </a>
            <a href="#">
              <li className="footer-item">disclaimer</li>
            </a>
          </ul>
        </div>
      </div>

      <div className="copyright-section">
        <h4>&copy; 2024 Share2Teach </h4>
      </div>
    </div>
  );
};

export default Footer;
