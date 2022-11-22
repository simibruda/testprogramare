import React from "react";
import Termite from "./ImageBugs/Termite@2x.png";
import Ant from "./ImageBugs/Ant@2x.png";
import BedBugs from "./ImageBugs/Bed Bug@2x.png";
import Mosquito from "./ImageBugs/Mosquito@2x.png";
function BluePest() {
  const bluepest = [
    {
      image: Termite,
      text: "TERMITE",
    },
    {
      image: Ant,
      text: "ANT",
    },
    {
      image: BedBugs,
      text: "BED BUGS",
    },
    {
      image: Mosquito,
      text: "MOSQUITO",
    },
  ];

  const stylingbugs = {
    display: "inline-block",
  };
  const space = {
    width: "25px",
    height: "auto",
    display: "inline-block",
  };
  return bluepest.map((bugs, index) => (
    <>
      <div key={index} style={stylingbugs}>
        <img src={bugs.image} alt="dog" style={{ width: "130px" }} />
        <h1 style={{ textAlign: "center", fontSize: "20px" }}>
          <b>{bugs.text}</b>
        </h1>
      </div>
      <div style={space}></div>
    </>
  ));
}

export default BluePest;
