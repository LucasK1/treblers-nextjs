import React from 'react';
// import "./ScrollHelper.module.scss";

const ScrollHelper = ({ className }) => {
  return (
    <>
      <div className={`${className} scroll-helper`}></div>
      <style jsx>{`
        @import './styles/variables.scss';

        .scroll-helper {
          height: 100px;
          position: absolute;
          bottom: 0;
        }

        @media (max-width: $phone-breakpoint) {
          .scroll-helper {
            height: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollHelper;
