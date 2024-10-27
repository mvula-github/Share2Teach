// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const handleCategorySelect = (category) => {
    navigate("/subjects", { state: { category } });
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-content">
          <h4 className="logo">Share2Teach</h4>

          <ul>
            <li className="menu-item">Primary</li>
            <li className="menu-item">Secodary</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
