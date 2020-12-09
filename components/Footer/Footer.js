import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import "./Footer.module.scss";

export default () => {
  return (
    <footer className="page-footer">
      <div className="container footer-container">
        <div className="footer-email">
          <a href="mailto:treblers@treblers.pl">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <span>&nbsp;: treblers@treblers.pl</span>
          </a>
        </div>
        <div className="footer-phone">
          <a href="tel:0048-791-331-232">
            <FontAwesomeIcon icon={faMobileAlt} size="2x" />
            <span>&nbsp;: +48 791 331 232 (Maria Jagaciak)</span>
          </a>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.youtube.com/channel/UCsTwnnYrrRD43gKz2XFLzYQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://pl-pl.facebook.com/treblersi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/treblerspl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
      <div className="container">
        <span className="copyright-info">
          &copy; 2019-2020 Maciej Kozłowski
        </span>
      </div>
    </footer>
  );
};
