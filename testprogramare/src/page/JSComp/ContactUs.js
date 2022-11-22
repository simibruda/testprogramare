import React from "react";
import image from "../images/Prefooter-bg@2x.jpg";
import "../CSS/ContactUs.css";
function ContactUs() {
  const backgorundContactUs = {
    backgroundImage: `url(${image})`,
    height: "500%",
     backgroundSize: "1530px",
    fontFamily: "Montserrat",
    color: "white",
  };
  const spaceright = {
    width: "25px",
    height: "auto",
    display: "inline-block",
  };
  const spacetop = {
    width: "auto",
    height: "25px",
    
  };
  return (
    <div style={backgorundContactUs} className='contactus-container'>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <div className="contactus-writing" style={{ textAlign: "center" }}>
        <h3>
          <b>Connect with Us</b>
        </h3>
        <div className="form-group">
          <input className="form-field" placeholder="Name" />
          <div style={spaceright}></div>
          <input className="form-field" placeholder="Email Address" />
          <div style={spacetop}></div>
          <input className="form-field" placeholder="Company" />
          <div style={spaceright}></div>
          <input className="form-field" placeholder="Telephon Number" />
          <div style={spacetop}></div>
         
        </div>
        <input className="form-field" style={{ width: '43%'}} placeholder="Note" />
        
        <div className="mobile-input">
      <input className="mobile-field" placeholder="Name" />
      <input className="mobile-field" placeholder="Email Address" />
      <input className="mobile-field" placeholder="Company" />
      <input className="mobile-field" placeholder="Telephon Number" />
      <input className="mobile-field" placeholder="Note" />
      </div>
        <button style={{marginTop:'20px'}}>SUBMIT</button>
      </div>
      <br />
    
     
    </div>
  );
}

export default ContactUs;
