import Link from 'next/link';
import React from 'react';

import './FeelTheReel.module.scss';

const FeelTheReel = () => {
  return (
    // this is because we can't have a tags inside a tags
    <>
      <Link href="/show">
        <div className="feel-the-reel">
          <h2>Show taneczno-muzyczny</h2>
          <p>
            Naszym najnowszym projektem taneczno-muzycznym jest widowisko
            irlandzkie&nbsp;
            <a
              className="band-link"
              href="https://www.facebook.com/feelthereelshow/"
              target="_blank"
              rel="noopener noreferrer">
              „Feel the Reel
            </a>
            " współtworzone razem z&nbsp;muzykami z&nbsp;zespołu&nbsp;
            <a
              className="band-link"
              href="http://www.taorluath.com/"
              target="_blank"
              rel="noopener noreferrer">
              Taorluath
            </a>
            . <span>CZYTAJ WIĘCEJ &gt;&gt;</span>
          </p>
        </div>
      </Link>
      <style jsx>{`
        @import './styles/variables.scss';

        .feel-the-reel {
          text-align: justify;
          color: $text-color;
          cursor: pointer;
          border-radius: 10px;
          padding: 20px 40px;
          transition: 0.4s;
          @media (min-width: 1280px) {
            &:hover {
              background: darken($background-color, 10%);
            }
          }
        }

        @media (max-width: $phone-breakpoint) {
          .feel-the-reel {
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default FeelTheReel;
