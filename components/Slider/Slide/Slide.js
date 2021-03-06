import React from 'react';
import './Slide.module.scss';

const Slide = ({ isVisible, imageToDisplay, quote, quoteAuthor }) => {
  return (
    <div className={`page-slider-slide ${isVisible ? 'visible' : ''}`}>
      <div
        className="slide-inner"
        style={{ backgroundImage: `url(${imageToDisplay})` }}>
        <div className="slide-quote">
          <p>{quote}</p>
          <h3>{quoteAuthor}</h3>
        </div>
      </div>
      <style jsx>
        {`
          @import './styles/variables.scss';

          .page-slider-slide {
            position: absolute;
            left: 0px;
            height: 100%;
            width: 100vw;
            transition: 0.8s;
            z-index: -1000;
            opacity: 0;

            &.visible {
              z-index: 0;
              opacity: 1;
            }

            .slide-inner {
              background-size: cover;
              background-position: center 40%;
              width: 100%;
              height: 100%;
              position: relative;
              background-repeat: no-repeat;
            }

            .slide-quote {
              position: absolute;
              bottom: 8%;
              right: 20%;
              z-index: 2000;
              color: #fff;

              h3 {
                text-align: right;
                font-size: 20px;
                text-shadow: 0 3px 10px #333;
              }

              p {
                font-size: 32px;
                text-shadow: 0 5px 10px #333;
              }

              @media (max-width: $phone-breakpoint) {
                h3 {
                  font-size: 12px;
                }

                p {
                  font-size: 18px;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Slide;
