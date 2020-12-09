import React, { useState, useEffect } from 'react';

import MenuItem from './MenuItem/MenuItem';

// import './Menu.module.scss';

export default function Menu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  useEffect(() => {
    document.addEventListener('touchend', (e) => {
      if (
        !e.target.classList.contains('hamburger-line') &&
        !e.target.classList.contains('hamburger-icon')
      ) {
        setIsMenuVisible(false);
      }
    });
  }, []);

  return (
    <nav className={`menu ${isMenuVisible ? 'menu-show' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="hamburger-line line-top" />
        <div className="hamburger-line line-middle" />
        <div className="hamburger-line line-bottom" />
      </div>
      <ul>
        <div className="small-screen-gap" />
        <MenuItem
          contents="O NAS"
          selector=".page-info-card-scroll"
          clickSelector=".page-info"
          toggleHamburger={toggleMenu}
        />
        <MenuItem
          contents="SHOW"
          selector=".page-info-card-scroll"
          clickSelector=".feel-the-reel"
          toggleHamburger={toggleMenu}
          link="show"
        />
        <MenuItem
          contents="OFERTA"
          selector=".page-info-card-scroll"
          clickSelector=".offer"
          toggleHamburger={toggleMenu}
          link="oferta"
        />
        <MenuItem
          contents="FILMY"
          selector=".page-videos-scroll"
          toggleHamburger={toggleMenu}
        />
        <MenuItem
          contents="GALERIA"
          selector=".page-gallery-scroll"
          toggleHamburger={toggleMenu}
          link="galeria"
        />
        <MenuItem
          contents="KONCERTY"
          toggleHamburger={toggleMenu}
          link="koncerty"
        />
        <MenuItem
          contents="KONTAKT"
          selector=".page-footer-scroll"
          toggleHamburger={toggleMenu}
          clickSelector=".page-footer"
        />
      </ul>
      <style jsx>
        {`
          @import './styles/variables.scss';

          .menu {
            height: 100%;
            transition: 0.5s;
            text-align: center;

            ul {
              display: flex;
              justify-content: space-between;
              align-items: center;
              align-items: center;
              list-style: none;
              height: 100px;
            }

            a {
              width: 100%;
            }
            .menu-item-wrapper {
              width: 100%;
            }
          }

          @media (max-width: 1000px) {
            .menu {
              height: 420px;
              position: absolute;
              top: 100px;
              right: -400px;
              background-color: #000;
              background-position: center center;
              border-bottom-left-radius: 10px;

              &.menu-show {
                right: 0;
                .line-top {
                  transform: translate(-10px, 17px) rotate(225deg);
                  width: 118%;
                }

                .line-bottom {
                  transform: translate(-10px, -17px) rotate(-225deg);
                  width: 118%;
                }

                .line-middle {
                  transform: translate(200px, 0);
                  background: transparent;
                }
              }

              .hamburger-icon {
                width: 60px;
                height: 60px;
                position: fixed;
                top: 20px;
                right: 20px;

                .hamburger-line {
                  width: 100%;
                  height: 2px;
                  background-color: #eee;
                  margin: 15px 0;
                  transition: 0.5s;
                }
              }
              ul {
                display: block;
                justify-content: space-between;
                align-items: center;
                align-items: center;
                list-style: none;
                height: auto;
                width: 100%;
              }
            }
          }

          @media (max-width: $phone-breakpoint) {
            .menu {
              top: 70px;
              height: 280px;

              &.menu-show {
                right: 0;
                .line-top {
                  transform: translate(-5px, 8px) rotate(225deg);
                  width: 118%;
                }

                .line-bottom {
                  transform: translate(-5px, -9px) rotate(-225deg);
                  width: 118%;
                }

                .line-middle {
                  transform: translate(200px, 0);
                  background: transparent;
                }
              }
              .hamburger-icon {
                width: 30px;
                height: 30px;
                position: fixed;
                top: 20px;
                right: 10px;
                .hamburger-line {
                  margin: 7px 0;
                }
              }
            }
          }
        `}
      </style>
    </nav>
  );
}
