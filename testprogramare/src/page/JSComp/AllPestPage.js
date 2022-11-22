import React from "react";
import "../CSS/AllPestPage.css";
import AllPest from "../components/AllPest";
import BluePest from "../components/BluePest";

function AllPestPage() {
  return (
    <div>
      <div className="allpest-background">
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        ></link><div classname='allpestcont-writting'>
        <div className="allpest-writting">
          <p style={{ color: "gray", fontSize: "25px" }}>
            All Pest Page Preview
          </p>
          <h1>
            <b>
              We don't just spray. We start by understanding the complete life
              cycle of the pests that pester you.
            </b>
          </h1>
          </div>
        </div>
        <div className="blue-pest">
          <BluePest />
        </div>
        <div className="down-allpest">
        <div className="all-pest">
          <AllPest />
          <AllPest />
        </div>
      </div>
      </div>
     
    
      <br />
      <br /> <br />
      <br />
    </div>
  );
}

export default AllPestPage;
