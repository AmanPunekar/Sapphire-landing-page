import React from "react";
import "../gateway.css";
const InfoCard = ({ iconSrc, heading, description }) => {
  return (
    <div className="info-cardSec ">
      <div className="contentSec">
        <img src={iconSrc} alt="Icon" className="iconSec" />
        <h2 className="headingSec">{heading}</h2>
        <p className="descriptionSec">{description}</p>
      </div>
      <div className="yellow-layerd "></div>
    </div>
  );
};

export default InfoCard;
