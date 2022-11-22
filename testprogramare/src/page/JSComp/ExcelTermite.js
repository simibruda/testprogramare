import React from "react";
import "../CSS/ExcelTermite.css";
import Review1 from "../ReviewsComp/_0000_Layer-2@2x.png";
import Review2 from "../ReviewsComp/_0001_Layer-3@2x.png";
import Review3 from "../ReviewsComp/_0002_Layer-4@2x.png";
import Review4 from "../ReviewsComp/_0003_Layer-5@2x.png";

function ExcelTermite() {
  const reviews = [Review1, Review2, Review3, Review4];

  return (
    <div className="exceltermite-container">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      ></link>
      <div className="exceltermite-writthing-container">
        <div
          className="exceltermite-writthing"
          style={{ fontFamily: "Montserrat" }}
        >
          <p style={{ color: "gray" }}>Execel Temite & Pest Control Reviews</p>
          <h2>
            <b>We are your neighbors, too. We love this place as you.</b>
          </h2>
        </div>
      </div>

      <div className="reviews">
        {reviews.map((review, index) => (
          <li key={index}>
            <img src={review} alt='rev' style={{ width: "170px",marginBottom:'10%' }} />
            <div class="space"></div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default ExcelTermite;
