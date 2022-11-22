import React from "react";
import YardImg from "../images/YardProtection.png";
import "../CSS/ExcelYard.css";
function ExcelYard() {
  const background = {
    backgroundImage: `url(${YardImg})`,
    backgroundSize: "100%",
    height: "555px",
    width: "100%",
  };
  return (
    <>
    <div style={background} className="background-excelyard">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <div className="writting-excelyard" style={{ color: "white" }}>
        <p style={{ fontSize: "25px" }}>EXCEL YARD PROTECTION</p>
        <h2>
          <b>It's like babyproofing your whole yard.</b>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, conseteur sadipscing elitr, sed diam
          nonumy eitmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
    </div> 
    <div className="backgorundYard-mobile" style={{ color: "white" }}>
    <h5 >EXCEL YARD PROTECTION</h5>
    <h2>
          <b>It's like babyproofing <br/>your whole yard.</b>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, conseteur sadipscing elitr, sed diam
          nonumy eitmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
    </div>
    </>
  );
}

export default ExcelYard;
