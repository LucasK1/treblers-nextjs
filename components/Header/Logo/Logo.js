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
        className="page-logo-container"
        style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
        <div
          className="page-logo-icon"
          style={{
            backgroundImage: `url(${require('../Images/logo-icon.png')})`,
          }}></div>
        <div
          style={{
            backgroundImage: `url(${require('../Images/logo-treblers.png')})`,
          }}
          className="page-logo-image"></div>
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

            &-icon {
              width: 60px;
              height: 60px;
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center center;
              transition: 0.8s;
            }
            &-image {
              width: 200px;
              height: 50px;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center center;
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
