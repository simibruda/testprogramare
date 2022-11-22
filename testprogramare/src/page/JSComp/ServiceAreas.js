import React from "react";
import wallpaper from "../Map/Map-bg@2x.jpg";
import "../CSS/ServiceAreas.css";
import bigmap from "../Map/Map-pattern.svg";
import newjerssy from "../Map/new-jersey@2x.png";
import arrowright from "../Map/arrow-right@2x.png";
import florida from "../Map/florida@2x.png";
import arrowleft from "../Map/arrow-left@2x.png";
import arrowleftmobile from "../Map/arrow-left-mobile.svg"
import arrowrightmobile from "../Map/arrow-right-mobile.svg"
function ServiceAreas() {
  return (
    <>
    <div className="servicea-arias">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <div className="serviceareas-container">
        <div style={{ textAlign: "center", width: "800px" }}>
          <p>Service Areas</p>
          <h1>
            <b>
              Ask us how we have offices in 11 counties in two states. (No,
              really, do it, Real people answer our phones.)
            </b>
          </h1>
        </div>
        <br />
        <br />
      </div>
      <div className="new-jerssy">
        <h1 style={{ textAlign: "right" }}>NEW JERSSY</h1>
        <img src={arrowright} alt="arrowright" style={{ width: "200px" }} />
        <img src={newjerssy} alt='newjerssy' style={{ width: "250px" }} />
      </div>
      <div
        style={{
          backgroundImage: `url(${bigmap})`,
          width: "1030px",
          height: "645px",
        }}
      >
        <div className="florida">
          <h1 style={{ textAlign: "center" }}>FLORIDA</h1>

          <img src={florida} alt ='florida' style={{ width: "300px" }} />
          <img
            src={arrowleft}
            className="arrow-left"
            alt="arrowleft"
            style={{ width: "140px", float: "right" }}
          />
        </div>
      </div>
    </div>
    <div className="servicearea-mobilecont">
    <div style={{ textAlign: "center", width: "90%",marginLeft:'5%' }}>
          <h5>Service Areas</h5>
          <h1>
            <b>
              Ask us how we have offices in 11 counties in two states. (No,
              really, do it, Real people answer our phones.)
            </b>
          </h1>

        </div>
        <br/>
      <div className="florida-mobile">
          <h5 style={{ marginLeft:'10%'}}>FLORIDA</h5>
          <img src={florida} alt ='florida' style={{ marginLeft:'10%',width: "70%",position:'absolute' }} />
          <img src={bigmap}  style={{width:'200%',position:'absolute',marginLeft:'-400px',marginTop:'200px'}}/>
          <img src={arrowrightmobile}  style={{width:'30%',position:'absolute',marginLeft:'73%',marginTop:'150px'}}/>
          <h6  style={{marginTop:'450px',marginLeft:'68%',position:'absolute'}}><b>NEW JERSSY</b></h6>
          <img src={arrowleftmobile}  style={{width:'10%',marginTop:'640px',marginLeft:'58%',position:'absolute'}}/>
          <img src={newjerssy} alt='newjerssy' style={{ width: "50%" ,marginTop:'480px',marginLeft:'49%'}} />
          </div>
          
    </div>
    </>
  );
}

export default ServiceAreas;
