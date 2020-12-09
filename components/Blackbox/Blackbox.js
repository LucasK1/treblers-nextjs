import Link from 'next/link';
import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import './Blackbox.module.scss';

export default ({ isOn, children }) => {
  // const history = useHistory();

  const enableScrolling = () => document.body.classList.remove('locked');

  const disableScrolling = () => document.body.classList.add('locked');

  useEffect(() => {
    isOn ? disableScrolling() : enableScrolling();
  }, [isOn]);

  return (
    <Link href="/">
      <div
        className={`helper-blackbox ${isOn ? 'active' : ''}`}
        // onClick={() => history.push("/")}
      >
        {children}
      </div>
    </Link>
  );
};
