import React from 'react';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import ScrollHelper from '../ScrollHelper/ScrollHelper';

// import './Header.module.scss';

export default function Header() {
  return (
    <>
      <ScrollHelper height="100px" />
      <header className="page-header sticky">
        <div className="container page-header-internal">
          <Logo />
          <Menu />
        </div>
      </header>
      <style jsx>
        {`
          @import './styles/helpers.scss';
          @import './styles/variables.scss';

          .sticky {
            position: fixed;
            top: 0;
          }

          .page-header {
            background-color: #000;
            background-position: center;

            width: 100%;
            z-index: 1000;
            box-shadow: 0 3px 6px rgba(#000, 0.54);
          }

          .page-header-internal {
            display: flex;
            justify-content: space-between;
          }

          .mock-header {
            height: 100px;
          }

          @media (max-width: $phone-breakpoint) {
            .mock-header {
              height: 50px;
            }
          }
        `}
      </style>
    </>
  );
}
