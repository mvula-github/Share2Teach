/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";

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
              <li className="footer-item">apply</li>
            </a>
          </ul>
        </div>

        <div className="footer-info">
          <h4>Platform</h4>

          <ul>
            <a href="#">
              <li className="footer-item">about us</li>
            </a>
            <a href="#">
              <li className="footer-item">contact us</li>
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
