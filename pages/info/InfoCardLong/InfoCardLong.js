import React from 'react';

import PersonalInfo from './PersonalInfo/PersonalInfo';
import ExitDummy from '../../../components/ExitDummy/ExitDummy';
import img1 from '../../../components/Slider/Images/5.jpg';

import './InfoCardLong.module.scss';

const InfoCardLong = () => {
  const groupMembers = require('./groupMembers.js');
  const peopleToDisplay = groupMembers.default.map((member, i) => (
    <PersonalInfo key={i} src={member.src} name={member.name} />
  ));
  return (
    <div>
      <div className="page-info-extended" onClick={(e) => e.stopPropagation()}>
        <ExitDummy />
        <h2>O nas</h2>
        <div className="page-info-images">
          <img src={img1} alt="" />
        </div>

        <div className="page-info-text">
          <p>
            Treblers to warszawski zespół tańca irlandzkiego założony w 2012
            roku, kiedy to tancerze znanych i cenionych warszawskich zespołów,
            których korzenie sięgają 1991 roku, połączyli siły i zaczęli razem
            współtworzyć choreografie. Nazwa zespołu pochodzi od podstawowego
            elementu tanecznego w stepie - "treble".
          </p>
          <p>
            W naszym repertuarze znajdują się zjawiskowe tańce w tradycyjnych
            irlandzkich baletkach oraz uwielbiany przez publiczność porywający
            step irlandzki. Wśród naszych tancerzy są wielokrotni mistrzowie
            Europy. Treblers to jedyny zespół w Polsce z tak utytułowanymi
            artystami, prezentującymi najwyższy międzynarodowy poziom tańca
            irlandzkiego.
          </p>

          <p>
            Fragmenty naszych pokazów można zobaczyć na{' '}
            <a
              href="http://www.youtube.com/user/treblerspl"
              target="_blank"
              rel="noopener noreferrer">
              naszym kanale youtube
            </a>
            .
          </p>
        </div>

        <p>
          Na koncie mamy występy na różnego rodzaju festiwalach muzycznych,
          eventach tematycznych oraz imprezach integracyjnych, zarówno solowo
          jak i przy akompaniamencie muzyki najlepszych polskich zespołów
          grających muzykę irlandzką. Tańczyliśmy na festiwalach folkowych
          (m.in. na Festiwalu Kultury Celtyckiej w Dowspudzie i Festiwalu Muzyki
          Celtyckiej „Zamek”), na deskach teatrów i filharmonii, oraz w
          programach telewizyjnych m.in. "Taniec z Gwiazdami", „Jaka to
          melodia”, „Got To Dance” oraz „World of Dance”. Występowaliśmy u boku
          wielu artystów estradowych, m.in. Urszuli Dudziak, Roberta
          Kasprzyckiego, Muńka Staszczyka, Haliny Mlynkovej oraz Aleksandra
          Rybaka.
        </p>
        <p>
          W latach 2013-2017 razem z muzykami grupy Carrantuohill
          współtworzyliśmy spektakl{' '}
          <strong>„Touch of Ireland – the Storm”</strong>. Naszym najnowszym
          projektem taneczno-muzycznym jest widowisko irlandzkie{' '}
          <strong>„Feel the Reel”</strong> współtworzone razem z muzykami z
          zespołu Taorluath.
        </p>

        <p>
          Cały czas rozwijamy swoje umiejętności biorąc udział w
          międzynarodowych zawodach tańca irlandzkiego, uczestnicząc w
          warsztatach prowadzonych przez mistrzów tańca irlandzkiego, między
          innymi Kevina McCormacka (10-krotnego mistrza świata i solisty
          Riverdance), Lisy Delaney-Galal (nauczycielki tańca irlandzkiego) czy
          Joela Hanny (choreografa i tancerza Dancing on Dangeous Ground).
          Współpracujemy także z najlepszymi w Europie i na świecie tancerzami
          tańca irlandzkiego.
        </p>
        <h2 style={{ paddingTop: '30px' }}>Tancerze Treblers</h2>
        <div
          className="personal-info-wrapper"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {peopleToDisplay}
        </div>
        <p>
          W poprzednich latach tańczyli z nami również: Grzegorz Prusak, Kasia
          Okulska-Gawlik, Ela Wojakowska, Agnieszka Bujak, Julia
          Konopka-Żołnierczuk, Ola Sałbut, Milena Rogowska, Dorota Kucharek, Ola
          Kałużny, Eliza Andrzejewska, Kateryna Derkachova, Karolina Lipińska,
          Natalia Aduszkiewicz, Ola Borowska, Asia Kierzkowska, Magda Niepiekło,
          Mateusz Wójcik, Ania Skupień, Ania Braćko, Edyta Jakubowska, Magda
          Lempert. Dziękujemy!
        </p>
      </div>
    </div>
  );
};

export default InfoCardLong;
