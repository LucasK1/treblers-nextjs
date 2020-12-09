import React, { Component } from 'react';
import Slide from './Slide/Slide';
// import images from './sliderImages';
import ScrollHelper from '../ScrollHelper/ScrollHelper';

// import "./Slider.module.scss";

export default class Slider extends Component {
  state = {
    currentImage: 0,
    isMobile: false,
  };

  img1 = require(this.state.isMobile ? './Images/mob/1.jpg' : './Images/1.jpg');
  img2 = require(this.state.isMobile ? './Images/mob/2.jpg' : './Images/2.jpg');
  img3 = require(this.state.isMobile ? './Images/mob/3.jpg' : './Images/3.jpg');
  img4 = require(this.state.isMobile ? './Images/mob/4.jpg' : './Images/4.jpg');

  images = [
    {
      img: this.img1,
      quoteAuthor: 'Szczegóły w dziale "KONCERTY"',
      quote: 'Ponad 100 000 przejechanych kilometrów w całej Europie.',
    },
    {
      img: this.img2,
      quoteAuthor: 'Portal folk24',
      quote: '"Top of the top zespołów sceny tańca irlandzkiego w Polsce"',
    },
    {
      img: this.img4,
      quoteAuthor: 'Michał Malitowski, "World of Dance"',
      quote: '"Taka akcja to czysta abstrakcja."',
    },
    {
      img: this.img3,
      quoteAuthor: 'Krzysztof Ibisz, "Taniec z Gwiazdami"',
      quote: '"Ludzie mocno stąpający po ziemi"',
    },
  ];

  componentDidMount() {
    if (window.innerWidth <= 768) {
      this.setState({ ...this.state, isMobile: true });
    }
    setInterval(() => {
      let newImage = this.state.currentImage;
      newImage++;
      if (newImage >= this.images.length) newImage = 0;
      this.setState({
        currentImage: newImage,
      });
    }, 5000);
  }

  render() {
    const { currentImage } = this.state;
    const slidesToDisplay = this.images.map((image, index) => (
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
        <style jsx>
          {`
            @import './styles/variables.scss';

            .page-slider {
              height: 100vh;
              z-index: -1000;
            }

            .page-slider-container {
              position: relative;
              margin-bottom: 10px;
              box-shadow: 0 3px 6px rgba(#000, 0.54);
            }

            @media (orientation: portrait) and (max-width: $phone-breakpoint) {
              .page-slider {
                height: 300px;
              }
            }
            @media (orientation: portrait) and (min-width: $phone-breakpoint) and (max-width: $tablet-breakpoint) {
              .page-slider {
                height: 600px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
