import React from "react";
import "../CSS/VideoSection.css";
import Video from "../images/video-placeholder.jpg";
import Play from "../images/play-button.svg";
function VideoSection() {
  return (
    <div style={{ }} className='videosection-container'>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <div
        className="videosection-writting"
        style={{ color: "white", fontFamily: "Montserrat" }}
      >
        <div >
          <p>Video Section</p>
          <h2>RELAX. WE'VE DONE THIS A FEW THOUSAND TIMES BEFORE.</h2>
          <br />
          <p style={{ textAlign:'justify'}}>
            We started in ______________, New Jersey in 1991. Since day one
            we've had a laser focuse on giving our customers the confidence that
            their pests are gone and will stay gone. Safely
          </p>
          <h1>Sam Sr.</h1>
        </div>
      </div>
 
      <div className="videosection-video">
        
          <img src={Play} alt='playbutton' className="play-button"  />
        
        <img src={Video} alt='video' className='video'  />
      </div>
    </div>
  );
}

export default VideoSection;
