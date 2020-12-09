import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Blackbox from '../../components/Blackbox/Blackbox';
import ScrollHelper from '../../components/ScrollHelper/ScrollHelper';
import ExitDummy from '../../components/ExitDummy/ExitDummy';

import './Gallery.module.scss';

export default function Gallery(props) {
  const [state, setState] = useState({
    currImg: 0,
    viewerIsOpen: false,
    isOpen: false,
    initialImageNumber: 8,
  });
  const [width, setWidth] = useState(0);

  const router = useRouter();
  const { pathname } = router;
  const isOpen = pathname === '/galeria';

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const openViewer = (e, index) => {
    e.stopPropagation();
    setState({ ...state, currImg: index, viewerIsOpen: true });
  };

  const { currImg, viewerIsOpen } = state;

  const isMobile = width <= 768;
  const thumbnails = isOpen
    ? [...Array(41).keys()].map((image, index) => (
        <Image
          key={index}
          src={
            isMobile
              ? `/galeria/Images/mob/${index + 1}.jpg`
              : `/galeria/Images/${index + 1}.jpg`
          }
          className="gallery-thumbnail"
          width="200"
          height="200"
          alt=""
          onClick={(e) => openViewer(e, index)}
        />
      ))
    : [];
  const imageSet = isOpen
    ? [...Array(41).keys()].map((image, index) => {
        return isMobile
          ? `/galeria/Images/mob/${index + 1}.jpg`
          : `/galeria/Images/${index + 1}.jpg`;
      })
    : [];
  return (
    <section className="page-gallery">
      <Link href="/galeria">
        <div className="container">
          <button>
            <div className="gallery-button-darken">
              <div className="gallery-mock-button">
                <span>GALERIA</span>
              </div>
            </div>
          </button>
        </div>
      </Link>
      <Blackbox isOn={isOpen}>
        <ExitDummy />
        <div
          className="page-gallery-thumbnails"
          style={viewerIsOpen ? { overflow: 'hidden' } : { overflow: '' }}>
          {thumbnails}
        </div>
      </Blackbox>
      <ScrollHelper className="page-footer-scroll" height="100px" />
      {viewerIsOpen && (
        <Lightbox
          mainSrc={imageSet[currImg]}
          nextSrc={imageSet[(currImg + 1) % imageSet.length]}
          prevSrc={imageSet[(currImg + imageSet.length - 1) % imageSet.length]}
          onCloseRequest={() => setState({ ...state, viewerIsOpen: false })}
          onMovePrevRequest={() =>
            setState({
              ...state,
              currImg: (currImg + imageSet.length - 1) % imageSet.length,
            })
          }
          onMoveNextRequest={() =>
            setState({ ...state, currImg: (currImg + 1) % imageSet.length })
          }
          reactModalStyle={{
            overlay: {
              zIndex: '10000',
            },
          }}
          enableZoom={false}
        />
      )}
    </section>
  );
}
