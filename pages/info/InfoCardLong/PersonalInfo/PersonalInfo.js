import React from 'react';

import './PersonalInfo.module.scss';

export default (props) => {
  return (
    <div className="personal-info-card">
      <div className="image-wrapper">
        <img src={props.src} alt="" />
        <div className="info">
          <h3>{props.name}</h3>
        </div>
        <div className="image-darkener" />
      </div>
    </div>
  );
};
