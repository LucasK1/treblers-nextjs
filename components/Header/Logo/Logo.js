import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

import './Logo.module.scss';

const Logo = () => {
  return (
    <div className="page-logo">
      <ScrollIntoView
        selector={'body'}
        smooth={true}
        alignToTop={true}
        className="page-logo-container">
        <div className="page-logo-icon"></div>
        <div className="page-logo-image"></div>
      </ScrollIntoView>
      <style jsx>
        {`
          @import './styles/variables.scss';

          .page-logo {
            height: 100%;

            transition: 0.4s;
            cursor: pointer;

            &:hover {
              background: rgba(#fff, 0.4);
            }

            .page-logo-container {
              height: 100px;
              display: flex;
              align-items: center;
            }
            .page-logo-image {
              width: 200px;
              height: 50px;
              background-image: url('../Images/logo-treblers.png') no-repeat;
              background-size: contain;
              background-position: center center;
            }

            .page-logo-icon {
              width: 60px;
              height: 60px;
              background-image: url('../Images/logo-icon.png') no-repeat;
              background-size: contain;
              background-position: center center;
              transition: 0.8s;
            }
          }

          @media (max-width: $phone-breakpoint) {
            .page-logo {
              .page-logo-container {
                height: 70px;
              }

              .page-logo-image {
                height: 35px;
              }

              .page-logo-icon {
                height: 40px;
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Logo;
