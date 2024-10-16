/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const InfoPanel = ({ image, title, description }) => {
  return (
    <>
      <div className="info-content">
        <div className="info-panel">
          <img src={image} alt="" />

          <h4 className="info-panel-heading">{title}</h4>

          <p className="info-panel-text"> {description}</p>
        </div>
      </div>
    </>
  );
};

export default InfoPanel;
