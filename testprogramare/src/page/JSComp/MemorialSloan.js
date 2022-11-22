import React from "react";
import Diversity from "../images/diversity@2x.png";
import "../CSS/MemorialSloan.css";
import Mskcc from "../images/mskcc-logo.png";
function MemorialSloan() {
  return (
    <>
    <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
    <div className='memorial-container'>
      
      
<div className="memorial-photo">
        <img src={Diversity} alt='Diversity' style={{ width: "300px" }} />
      </div>
      <div className="logo-mskcc">
      
        <img src={Mskcc} alt='mskcc'style={{ width: "300px" }} />
        <div className="memorial-writting" style={{ color: "white" }}>
          <h2>Help us bring hope to people with cancer.</h2>
          <p>
            CharutyWach has included Memorial Sloan Kettering as a Top-Rated
            Charity, emphasizing that donor dollars go further here. Our
            doctors, researchers and physicians deliver unparalleled life-saving
            treatments, all made possible by generous donor support.
          </p>
          <br />
          <button>LEARN HOW</button>
        </div>
      </div>
    </div>
    <div className="memorialcontainer-mobile">
    <img src={Diversity} alt='Diversity' style={{ width: "300px" }} />
    <img src={Mskcc} alt='mskcc'style={{ width: "300px",marginTop:'30px',marginBottom:'20px' }} />
    
    <h2>Help us bring hope to people with cancer.</h2>
    <br/>
          <p>
            CharutyWach has included Memorial Sloan Kettering as a Top-Rated
            Charity, emphasizing that donor dollars go further here. Our
            doctors, researchers and physicians deliver unparalleled life-saving
            treatments, all made possible by generous donor support.
          </p>
          <button>LEARN HOW</button>
    </div>
    </>
  );
}

export default MemorialSloan;
