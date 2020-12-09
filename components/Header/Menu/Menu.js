import React, { useState, useEffect } from "react";

import MenuItem from "./MenuItem/MenuItem";

import "./Menu.module.scss";

export default function Menu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  useEffect(() => {
    document.addEventListener("touchend", e => {
      if (
        !e.target.classList.contains("hamburger-line") &&
        !e.target.classList.contains("hamburger-icon")
      ) {
        setIsMenuVisible(false);
      }
    });
  }, []);

  return (
    <nav className={`menu ${isMenuVisible ? "menu-show" : ""}`}>
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
    </nav>
  );
}
