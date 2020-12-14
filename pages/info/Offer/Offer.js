import React from 'react';

import './Offer.module.scss';

const Offer = () => (
  <div className="offer">
    <h2>Oferta</h2>
    <p>
      Oferujemy pokazy taneczne do muzyki zarówno odtwarzanej jak i granej na
      żywo.&nbsp;&nbsp;
      <span>CZYTAJ WIĘCEJ &gt;&gt;</span>
    </p>
    <style jsx>{`
      @import './styles/variables.scss';

      .offer {
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
        .offer {
          padding: 10px;
        }
      }
    `}</style>
  </div>
);

export default Offer;
