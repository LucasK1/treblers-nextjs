import React from 'react';
import { useLocation, Route } from 'react-router-dom';
import Link from 'next/link';

import ScrollHelper from '../../components/ScrollHelper/ScrollHelper';
import Blackbox from '../../components/Blackbox/Blackbox';
import InfoCardShort from './InfoCardShort/InfoCardShort';
import InfoCardLong from './InfoCardLong/InfoCardLong';
import FeelTheReel from './FeelTheReel/FeelTheReel';
import Offer from './Offer/Offer';
import FeelTheReelLong from './FeelTheReelLong/FeelTheReelLong';
import OfferLong from '../oferta/OfferLong';
import Shows from './Shows/Shows';

import './Info.module.scss';

const Info = () => {
  const { pathname } = useLocation();

  return (
    <section className="page-info-card">
      <Blackbox isOn={pathname !== '/' && pathname !== '/galeria'}>
        <div className="container">
          <Route path="/info">
            <InfoCardLong isOn={pathname === '/info'} />
          </Route>
          <Route path="/show">
            <FeelTheReelLong />
          </Route>
          <Route path="/oferta">
            <OfferLong />
          </Route>
          <Route path="/koncerty">
            <Shows />
          </Route>
        </div>
      </Blackbox>

      <div className="container info-container">
        <Link href="/info">
          <InfoCardShort />
        </Link>
        {/* This one has to be toggled manually from inside */}
        <FeelTheReel />
        <Link href="/oferta">
          <Offer />
        </Link>
      </div>
      <ScrollHelper className="page-videos-scroll" height="100px" />
    </section>
  );
};

export default Info;
