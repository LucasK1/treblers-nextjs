import React from "react";
import "./Slide.module.scss";

export default ({ isVisible, imageToDisplay, quote, quoteAuthor }) => {
  return (
    <div className={`page-slider-slide ${isVisible ? "visible" : ""}`}>
      <div
        className="slide-inner"
        style={{ backgroundImage: `url(${imageToDisplay})` }}
      >
        <div className="slide-quote">
          <p>{quote}</p>
          <h3>{quoteAuthor}</h3>
        </div>
      </div>
    </div>
  );
};
