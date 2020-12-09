import React, { Component } from "react";
import "./Slider.module.scss";
import Slide from "./Slide/Slide";
import images from "./sliderImages";
import ScrollHelper from "../ScrollHelper/ScrollHelper";

export default class Slider extends Component {
  state = {
    currentImage: 0
  };

  componentDidMount() {
    setInterval(() => {
      let newImage = this.state.currentImage;
      newImage++;
      if (newImage >= images.length) newImage = 0;
      this.setState({
        currentImage: newImage
      });
    }, 5000);
  }
  render() {
    const { currentImage } = this.state;
    const slidesToDisplay = images.map((image, index) => (
      <Slide
        key={index}
        isVisible={index === currentImage ? true : false}
        imageToDisplay={image.img}
        quoteAuthor={image.quoteAuthor}
        quote={image.quote}
      />
    ));
    return (
      <div className="page-slider-container">
        <section className="page-slider">{slidesToDisplay}</section>
        <ScrollHelper className="page-info-card-scroll" />
      </div>
    );
  }
}
