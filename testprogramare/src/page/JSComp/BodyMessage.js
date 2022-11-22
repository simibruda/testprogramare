import React from "react";
import "../CSS/BodyMessage.css";
import GreenShield from "../images/Green-shield.svg";
function BodyMessage() {
  return (
    <div className="background-body">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <div className="writting-body" style={{ fontFamily: "Montserrat" }}>
        <h5 style={{ color: "gray" }}>Body Message</h5>
        <h3><b>Get 'em gone. Keep 'em gone.</b></h3>
        <h3><b>Prevention-based pest control for<br/> any local pest.</b></h3>
        <h6 style={{ color: "gray" }}>
          The Excel Integrated Pest Management approach addresses the<br/> underlying
          couse of pest problems. 365 days a year. 100% guaranteed
        </h6>
        <h5>The Excel Integrated Pest Management approach</h5>
        <br />
 
        <div className="button-center">
          <button className="fist-button">RESUDENTIAL PLANS</button>
          <div class="space"></div>
          <button>COMMERCIAL PROGRAM</button>
        </div>
      </div>

      <div className="green-shield">
        <img src={GreenShield} alt="dog" style={{  }} />
      </div>
    </div>
  );
}

export default BodyMessage;
