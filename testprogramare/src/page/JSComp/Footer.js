import React from "react";
import "../CSS/Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <div className=" all-lists">
        <div className="first-list">
          <ul>
            <li>
              <h4>
                <b>What We Do</b>
              </h4>
            </li>
            <li>Pest Control</li>
            <li>Termite</li>
            <li>Mosquito</li>
            <li>Bed Bugs</li>
          </ul>
        </div>
        <div className="space"></div>
        <div className="  second-list">
          <ul>
            <li>
              <h4>
                <b>Who We Serve</b>
              </h4>
            </li>
            <li>Residential</li>
            <li>Commercial</li>
            <li>The Charity</li>
            <li>Our Customers</li>
          </ul>
        </div>
        <div className="space"></div>
        <div className="third-list">
          <ul>
            <li>
              <h4>
                <b>Where we Work</b>
              </h4>
            </li>
            <li>River Edge, NJ</li>
            <li>Hoboken, NJ</li>
            <li>Shrewsbury, NJ</li>
            <li>Deerfild Beach, FL</li>
          </ul>
        </div>
        <div className="space"></div>
        <div className="fourth-list">
          <ul>
            <li>
              <h4>
                <b>Where to Find Us</b>
              </h4>
            </li>
            <li>Why Excel</li>
            <li>Contact Excel</li>
            <li>Careers</li>
            <li>Acquisitions</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li>Privacy & Terms</li>
          <li
            style={{
              borderLeft: "solid",
              borderRight: "solid",
              borderWidth: "1px",
            }}
          >
            Site Map
          </li>
          <li>©2020 Excel Pest Service</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
