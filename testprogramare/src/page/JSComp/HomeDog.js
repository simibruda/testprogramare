import React from "react";
import Bage from "../images/365 badge@2x.png";
import "../CSS/HomeDog.css";
import Bagepadding from '../images/Badge-bg.svg'
import Group196 from '../images/Group196.svg'
function HomeDog() {
  return (
    <>
   
  
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
       <div className="dog-container-mobile">
        <div className="dogmobile-writting">
          <div >
          <h4>Pest control made simple</h4>
         
          <h1>Fast Friendly.<br/>100% Guaranteed</h1>

          </div>
        </div>
       <img src={Bage} alt="bage" style={{ width: "40%",position:'absolute',marginLeft:'30%',marginRight:'30%',marginTop:'100px'}} />
       <img src={Group196} alt="bage" style={{marginTop:'160px',width:'100%'}} />
       
  </div>
      <div className='dog-container'>
  
        <div style={writeDog}>
          <div className='writting-containerdog'>
          <h2>Pest control made simple.</h2>
          <h1>
            <b>Relax. Safe and thorough pest<br/> control is our job</b>
          </h1>
          <h2>888-123-4567</h2>
          <p>
            <b>FREE INSPECTION. SAME DAY SERVICE</b>
          </p>
            
        </div>
        <div className='bage-div'>
        <img src={Bage} alt="bage" style={{ width: "200px",position:'absolute',marginLeft:'43%',marginTop:'35px'}} />
        <img src={Bagepadding} alt="bage" style={{marginTop:'150px'}} />
        </div>
        </div>
       
        
        
      </div>
  
    
 </>
  );
}

const writeDog = {
 
  color: "white",
 
  display:'justify',
  alignItems: 'center',
 justifyContent: 'center',
};

export default HomeDog;
