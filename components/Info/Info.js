import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import ScrollHelper from '../ScrollHelper/ScrollHelper';
import InfoCardShort from '../../pages/info/InfoCardShort/InfoCardShort';
import FeelTheReel from '../../pages/info/FeelTheReel/FeelTheReel';
import Offer from '../../pages/info/Offer/Offer';
// import Blackbox from '../Blackbox/Blackbox';
// import InfoCardLong from './InfoCardLong/InfoCardLong';
// import FeelTheReelLong from '../../pages/info/FeelTheReelLong/FeelTheReelLong';
// import OfferLong from '../oferta';
// import Shows from './Shows/Shows';

// import './Info.module.scss';

const Info = ({ router }) => {
  const { pathname } = router;

  return (
    <section className="page-info-card">
      {/* {pathname === '/show' ? (
        <Blackbox isOn={pathname !== '/' && pathname !== '/galeria'}>
          <div className="container">
            <FeelTheReelLong />
          </div>
        </Blackbox>
      ) : null}
      <Route path="/show">
            <InfoCardLong isOn={pathname === '/info'} />
          </Route>
          <Route path="/oferta">
            <OfferLong />
          </Route>
          <Route path="/koncerty">
            <Shows />
          </Route> */}

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
      <style jsx>{`
        @import './styles/helpers.scss';
        @import './styles/variables.scss';

        .page-info-card {
          position: relative;
          padding-bottom: 20px;
        }

        .info-container {
          background: $background-color;
          text-align: justify;
          border-radius: 10px;
          color: $text-color;
          cursor: pointer;
          transition: 0.4s;
          margin-top: -20px;
          h2 {
            font-size: 26px;
            margin-bottom: 20px;
          }

          p {
            font-size: 20px;
            margin-bottom: 20px;
            line-height: 1.5;
          }
          span {
            display: inline-block;
            font-weight: 800;
            background-color: rgba(#008a8a, 0.43);
            border-radius: 6px;
            padding: 0 10px;
            box-shadow: 0 1px 3px #555;
          }
          .emphasized {
            background: darken($background-color, 10%);
          }
        }

        @media (max-width: $phone-breakpoint) {
          .page-info-card {
            h2 {
              font-size: 15px;
            }

            p {
              font-size: 12px;
            }
          }
        }
      `}</style>
    </section>
  );
};

export default withRouter(Info);
