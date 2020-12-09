import React from 'react';
import YouTube from 'react-youtube';

import ExitDummy from '../../../components/ExitDummy/ExitDummy';

import img1 from '../../../components/Slider/Images/1.jpg';
import img2 from '../../galeria/Images/7.jpg';
import img3 from './1.jpg';

import './FeelTheReelLong.module.scss';

const FeelTheReelLong = () => {
  const opts = {
    height:
      window.innerWidth <= 1120 ? (window.innerWidth * 0.8) / (16 / 9) : 720,
    width: window.innerWidth <= 1120 ? window.innerWidth * 0.8 : 1120,
    border: 0,
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="page-info-extended" onClick={(e) => e.stopPropagation()}>
      <ExitDummy />
      <h2>Feel the Reel</h2>
      <div className="page-info-flex-container">
        <div className="page-info-text">
          <p>
            <strong>Feel the Reel</strong> to nowy, muzyczno-taneczny spektakl
            tancerzy Treblers oraz zespołu muzyki irlandzkiej Taorluath.
            Zapraszamy Was w niezapomnianą podróż po Szmaragdowej Wyspie,
            podczas której odwiedzimy razem miejsca, które łączy irlandzki
            duch i muzyka.
          </p>

          <p>
            Zawitamy na tajemnicze wrzosowiska, wichrowe klify i do zasnutych
            mgłą dolin. Zajrzymy na swojską prowincję aby zatańczyć tradycyjne
            ceili. Przywitamy się ze szkockimi sąsiadami i poznamy historię
            napiętej atmosfery w Belfaście. Przemierzając niespokojne północne
            morza, dotrzemy też do irlandzkich emigrantów w Stanach
            Zjednoczonych.
          </p>
          <p>
            Widowiskowy step oraz delikatny taniec w miękkich butach przy
            akompaniamencie wspaniałej muzyki na żywo pozwoli Wam przenieść się
            na Zieloną Wyspę i poczuć prawdziwy klimat Irlandii.
          </p>
          <p>
            Zapraszamy do obserwowania profilu Feel the Reel na 
            <a
              href="https://www.facebook.com/feelthereelshow"
              target="_blank"
              rel="noopener noreferrer">
              facebooku
            </a>
            .
          </p>
        </div>
        <div className="page-info-images">
          <img src={img3} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
      <img
        src={img1}
        alt=""
        style={{
          width: '100%',
          borderRadius: '10px',
          boxShadow: '0px 0px 20px #555',
        }}
      />

      <YouTube className="info-video" videoId="g_bcXDKNezM" opts={opts} />
      <YouTube className="info-video" videoId="YMc4hJjykwg" opts={opts} />
      <YouTube className="info-video" videoId="_GZ__ARERNw" opts={opts} />
    </div>
  );
};

export default FeelTheReelLong;
