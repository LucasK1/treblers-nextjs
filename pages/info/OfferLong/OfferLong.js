import React from 'react';

import ExitDummy from '../../../components/ExitDummy/ExitDummy';

import img1 from '../../galeria/Images/20.jpg';
import img2 from '../../galeria/Images/6.jpg';
import img3 from './1.jpg';

import './OfferLong.module.scss';

export default () => {
  return (
    <div className="page-info-extended" onClick={(e) => e.stopPropagation()}>
      <ExitDummy />
      <h2>Oferta</h2>
      <div className="page-info-flex-container">
        <div className="page-info-text">
          <p>
            Oferujemy profesjonalną oprawę artystyczną imprez do muzyki zarówno
            odtwarzanej jak i granej na żywo. Poza pokazami tanecznymi oferujemy
            krótkie warsztaty taneczne dopasowane do grona odbiorców.
          </p>
          <ul className="offer-types">
            <li>
              <strong>POKAZY TANECZNE</strong>  - mogą mieć różną formę, od
              krótkich solowych występów, poprzez tańce w wykonaniu kilku
              tancerzy po ciekawe grupowe choreografie z dopasowanymi do
              okoliczności barwnymi strojami. Mogą być zarówno do muzyki
              odtwarzanej jak również granej na żywo. Współpracujemy z wieloma
              zespołami muzyki irlandzkiej, między innymi z grupami  Duan, Ceili
              oraz Patrick’s Hat. Z zespołem Taorluath sworzyliśmy nasz
              najnowszy projekt „Feel the Reel”.
            </li>
            <li>
              <strong>NAUKA PROSTYCH TAŃCÓW</strong>  – oprócz występów możemy
              zaproponować wspólną zabawę z publicznością, podczas której uczymy
              podstawowych kroków tańca irlandzkiego. Jest to wesoła integrująca
              zabawa, bardzo lubiana przez wszystkich.
            </li>
            <li>
              <strong>WARSZTATY TANECZNE</strong> – możemy prowadzić
              profesjonalne warsztaty taneczne na różnych poziomach
              zaawansowania. Świetnie sprawdzają się na festiwalach
              artystycznych, czy jako tematyczne zajęcia szkolne lub program
              aktywnej integracji pracowników.
            </li>
          </ul>
        </div>
        <div className="page-info-images">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
      <h2>Ceny</h2>
      <div className="page-info-flex-container">
        <div className="page-info-text">
          <p>
            Cena występów jest zależna od wybranego repertuaru. Cena jest
            związana z długością pokazu i ilością zaangażowanych w nim tancerzy.
            Minimalnie pokaz może trwać kilka minut przy udziale 1-2 tancerzy.
            Maksymalnie w półgodzinny pokaz tańca zaangażowany jest cały zespół.
            Najbogatsze w naszej ofercie SHOW Feel the reel, będące pokazem do
            muzyki na żywo, może trwać do 1.5 godziny i bierze w nim udział
            pełen skład Treblers.
          </p>
          <p>
            Prosimy o kontakt mailowy lub telefoniczny aby ustalić szczegóły
            oferty.
          </p>
        </div>
        <div className="page-info-images">
          <img src={img3} alt="" />
        </div>
      </div>

      <h2>Wymagania sceniczne</h2>

      <ul className="offer-requirements">
        <li>
          Scena lub stabilna, równa powierzchnia o odpowiedniej nawierzchni do
          tańca, najlepiej podłoga drewniana lub wykładzina baletowa (trawa,
          posadzki kamienne i betonowe są wykluczone ze względów bezpieczeństwa
          tancerzy)
        </li>
        <li>odpowiednie nagłośnienie oraz sprzęt z odtwarzaczem CD lub MP3</li>
        <li>garderoba zlokalizowana możliwie blisko sceny.</li>
      </ul>
    </div>
  );
};
