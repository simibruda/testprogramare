import React from "react";
import "../CSS/TrustCertification.css";
import company1 from "../TrustComp/company1@2x.png";
import company2 from "../TrustComp/company2@2x.png";
import company3 from "../TrustComp/company3@2x.png";
import company4 from "../TrustComp/company4@2x.png";
import company5 from "../TrustComp/company5@2x.png";
function TrustCertification() {
  const companys = [company1, company2, company3, company4, company5];
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <div
        className="trustcertification-writing"
        style={{ fontFamily: "Montserrat" }}
      >
        <p style={{ color: "gray" }}>Trust-Certifications</p>
        <h1>
          <b>The company we know.</b>
        </h1>
        <br />
        <div className='company-mobile'>
        {companys.map((company, index) => (
          <li key={index}>
            <img src={company} alt='company'  />
            <div className="space"></div>
          </li>
        ))}
        </div>
      </div>
    </div>
  );
}

export default TrustCertification;
