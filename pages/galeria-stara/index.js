import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Blackbox from '../../components/Blackbox/Blackbox';
import ScrollHelper from '../../components/ScrollHelper/ScrollHelper';
import ExitDummy from '../../components/ExitDummy/ExitDummy';

// import './Gallery.module.scss';

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
  const isOpen = pathname === '/galeria-stara';

  let imageNameArray = [];
  for (let i = 1; i <= 41; i++) {
    imageNameArray.push(i + '.jpg');
  }

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
          layout="fill"
          src={
            isMobile
              ? '/Images/mob/' + imageNameArray[index]
              : '/Images/' + imageNameArray[index]
          }
          className="gallery-thumbnail"
          layout="fill"
          alt=""
          onClick={(e) => openViewer(e, index)}
        />
      ))
    : [];
  const imageSet = isOpen
    ? [...Array(41).keys()].map((image, index) => {
        return isMobile
          ? `/galeria-stara/Images/mob/${index + 1}.jpg`
          : `/galeria-stara/Images/${index + 1}.jpg`;
      })
    : [];
  return (
    <section className="page-gallery">
      {/* <Link href="/galeria">
        <div className="container">
          <button>
            <div className="gallery-button-darken">
              <div className="gallery-mock-button">
                <span>GALERIA</span>
              </div>
            </div>
          </button>
        </div>
      </Link> */}
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
      <style jsx>
        {`
          @import './styles/variables.scss';
          @import './styles/helpers.scss';

          .page-gallery {
            transition: 0.4s;
            position: relative;
            padding-bottom: 20px;
            padding-top: 20px;
            background: #000;
            box-shadow: 0 3px 6px rgba(#000, 0.54);

            button {
              outline: none;
              border: none;
              background: url('./Images/button/gallery-button.jpg') no-repeat;
              background-size: cover;
              background-position: center center;
              width: 100%;
              height: 600px;
              transition: 0.4s;
              font-size: 40px;
              cursor: pointer;

              color: #fff;
              text-shadow: 0 2px 2px #666;
              &:hover .gallery-button-darken {
                background: rgba(#000, 0.4);
              }

              &:hover .gallery-mock-button {
                width: 320px;
                height: 320px;
                font-size: 45px;
              }
            }

            .gallery-button-darken {
              height: 100%;
              width: 100%;
              transition: 0.4s;
            }
            .gallery-mock-button {
              width: 300px;
              height: 300px;
              background: url('../../components/Header/Images/treblers-icon-large.png')
                no-repeat;
              background-size: contain;
              border-radius: 6px;
              margin: 0 auto;
              position: absolute;
              bottom: 50px;
              left: 0;
              right: 0;
              transition: 0.4s;
              display: flex;
              align-items: center;
              justify-content: center;
              span {
                text-shadow: none;
              }
            }
            img {
              width: 500px;
            }

            .viewer {
              transition: 0.4s;
            }

            .page-gallery-darkened-background {
              width: 100vw;
              position: fixed;
              top: 0;
              height: 100vh;
              z-index: 2000;
              background: rgba(#000, 0.8);
              transition: 0.6s;
            }

            .page-gallery-thumbnails {
              justify-content: center;
              margin-top: 30px;
              display: grid;
              grid-gap: 5%;
              grid-template-columns: repeat(auto-fill, 20%);
              align-items: center;
              height: 90vh;
              overflow: auto;
            }

            .gallery-thumbnail {
              cursor: pointer;
              width: 100%;
            }

            @media (max-width: $tablet-breakpoint) {
              .page-gallery-thumbnails {
                margin: 30px;
                grid-gap: 3%;
                grid-template-columns: repeat(auto-fill, 30%);
              }
            }

            @media (max-width: $phone-breakpoint) {
              .page-gallery-thumbnails {
                grid-gap: 3%;
                grid-template-columns: repeat(auto-fill, 45%);
              }
            }
          }

          @media (max-width: $container-width) {
            .page-gallery {
              width: 100%;
              button {
                height: 300px;

                background-size: contain;

                &:hover .gallery-mock-button {
                  width: 106px;
                  height: 106px;
                  font-size: 22px;
                }
              }

              .gallery-mock-button {
                height: 100px;
                width: 100px;
                span {
                  font-size: 20px;
                }
              }
            }
          }
        `}
      </style>
    </section>
  );
}
