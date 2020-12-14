import React from 'react';

import './InfoCardShort.module.scss';

const InfoCardShort = () => (
  <div className="page-info">
    <h2>Fáilte!</h2>
    <p>
      Witaj na stronie grupy Treblers, profesjonalnego zespołu specjalizującego
      się w tańcu irlandzkm. Widowiskowy step oraz delikatny taniec w miękkich
      butach przy akompaniamencie wspaniałej muzyki irlandzkiej - to właśnie
      prezentujemy na każdym z naszych pokazów.&nbsp;&nbsp;
      <span>CZYTAJ WIĘCEJ &gt;&gt;</span>
    </p>
    <style jsx>{`
      @import './styles/variables.scss';

      .page-info {
        text-align: justify;
        padding: 20px 40px;
        border-radius: 10px;
        color: $text-color;
        cursor: pointer;
        transition: 0.4s;
        @media (min-width: 1280px) {
          &:hover {
            background: darken($background-color, 10%);
          }
        }
      }

      .band-link {
        font-weight: 700;
        transition: 0.4s;
        color: $text-color;
        &:hover {
          color: lighten($text-color, 20%);
        }
      }

      @media (max-width: $phone-breakpoint) {
        .page-info {
          padding: 10px;
        }
      }
    `}</style>
  </div>
);

export default InfoCardShort;
