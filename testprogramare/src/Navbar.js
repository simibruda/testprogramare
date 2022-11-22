import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";
import Logo from "./NavBarImg/Logo-Excel@2x.png";
import Customer from "./NavBarImg/Customer-icon.svg";
import navicon from "./NavBarImg/global-navigation-bar.svg";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import email from './NavBarImg/email.svg'
import call from './NavBarImg/Phone.svg'
export default function Navbar() {
  const space = {
    width: "15px",
    height: "auto",
    display: "inline-block",
  };

  const [mobile, setMobile] = useState(false);
  return (
    <>
      <div
        className=" navbar fixed-top navbar-expand-md navbar-light bg-light nav-container"
        style={{ fontFamily: "Montserrat" }}
      >
        <img src={Logo} alt="Logo" className="logo" />

        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        ></link>
        <div className="top-part-mobile ">
          <h6 style={{ color: "#0054A4" }}>
            Free inspections.
            <br />
            <b>Call 888-123-4567</b>
          </h6>
          <div style={space}></div>
          <img
            src={navicon}
            alt="navicon"
            onClick={() => setMobile(true)}
            style={{ width: "15%" }}
          />
        </div>

        <div className="position-absolute top-0 end-0 top-part">
          <ul>
            <li style={{ color: "#0054A4" }}>
              Free inspection. Same Day Service.<b>Call 888-123-4567</b>
            </li>
            <li>Our Guarantee</li>
            <li>Resources</li>
            <li style={{ color: "#0054A4" }}>
              <img src={Customer} alt="Your SVG" /> Custumer Potential
            </li>

            <button>GET AN ESTIMATE</button>
          </ul>
        </div>
        {/*top part for desktop*/}

        <nav
          className={
            mobile
              ? "nav-links-mobile"
              : "position-absolute bottom-0 end-0 nav "
          }
        >
          <div
            style={mobile ? { visibility: "visible" } : { display: "none" }}
            className="mobile-toppart"
          >
            <ImCross
              onClick={() => setMobile(false)}
              style={{ float: "right" }}
              size="15%"
            />

            <p>
              <img src={Customer} alt="Your SVG" />
              Custumer Portal
            </p>
            <div className="div-button">
              <button>GET AN ESTIMATE</button>
            </div>
          </div>
          <ul className="mobile-toppart-ul">
            <CustomLink to="/">Residential</CustomLink>
            <CustomLink to="/">Commercial</CustomLink>
            <CustomLink to="/">Location</CustomLink>
            <CustomLink to="/">Pests</CustomLink>
            <CustomLink to="/">Why Excel</CustomLink>
            <CustomLink to="/">Contact</CustomLink>
          </ul>
          <div style={mobile ? { visibility: "visible" } : { display: "none" }}>
            <div className="mobile-bottom">
              <p>Our Guarantee</p>
              <p>Resources</p>
            </div>
            <div className="mobile-bottom-contact">
            <button className="email"><img src={email} alt='email' style={{width:'10%',marginRight:'2%'}}/>Email</button>
            <button className="call"><img src={call} alt='call' style={{width:'10%',marginRight:'2%'}}/>Call</button>
            </div>
          </div>
          <div></div>
        </nav>
      </div>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
