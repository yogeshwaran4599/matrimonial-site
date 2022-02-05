import React from "react";
import "./SliderSection.css";

function SliderSection() {
  return (
    <div className="Slider-section-wrapper">
      <div className="couples-say">
        <h2>thousands of loved couples matched by tamil matrimony</h2>
      </div>
      <div className="couples-image">
        <div className="married-couples">
          <img src={require("../images/download1.jpg")} />
          <p>vasanth & anitha</p>
        </div>
        <div className="married-couples">
          <img src={require("../images/download2.jpg")} />
          <p>robin & jenifer</p>
        </div>
        <div className="married-couples">
          <img src={require("../images/download3.jpg")} />
          <p>tamil & gomathi</p>
        </div>
        <div className="married-couples">
          <img src={require("../images/download4.jpg")} />
          <p>vinoth & priya</p>
        </div>
      </div>
    </div>
  );
}

export default SliderSection;
