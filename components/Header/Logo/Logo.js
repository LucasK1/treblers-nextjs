import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

import './Logo.module.scss';

export default () => {
  return (
    <div className="page-logo">
      <ScrollIntoView 
        selector={"body"}
        smooth={true}
        alignToTop={true}
        className="page-logo-container"
      >
        <div className="page-logo-icon"></div>
        <div className="page-logo-image"></div>
      </ScrollIntoView>         
    </div>
  );
}
