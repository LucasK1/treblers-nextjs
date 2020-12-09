import Link from 'next/link';
import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import './Blackbox.module.scss';

const Blackbox = ({ isOn, children }) => {
  // const history = useHistory();

  const enableScrolling = () => document.body.classList.remove('locked');

  const disableScrolling = () => document.body.classList.add('locked');

  useEffect(() => {
    isOn ? disableScrolling() : enableScrolling();
  }, [isOn]);

  return (
    <Link href="/">
      <>
        <div
          className={`helper-blackbox ${isOn ? 'active' : ''}`}
          // onClick={() => history.push("/")}
        >
          {children}
        </div>
        <style jsx>
          {`
            .helper-blackbox {
              width: 100vw;
              position: fixed;
              top: 0;
              height: 100vh;
              z-index: 2000;
              background: rgba(#000, 0.8);
              transition: transform 0.3s, opacity 0.3s;
              opacity: 0;
              transform: translate3d(0, -100vh, 0);

              &.active {
                opacity: 1;
                transform: translate3d(0, 0, 0);
              }
            }
          `}
        </style>
      </>
    </Link>
  );
};

export default Blackbox;
