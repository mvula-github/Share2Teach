/* eslint-disable no-unused-vars */
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    navigate("/subjects", { state: { category } });
  };
  return (
    <>
      <div className="nav-container">
        <div className="nav-content">
          <h4 className="logo">S2T</h4>

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
