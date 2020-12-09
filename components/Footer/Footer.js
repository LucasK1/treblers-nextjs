import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
// import "./Footer.module.scss";

const Footer = () => {
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
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://pl-pl.facebook.com/treblersi/"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/treblerspl/"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
      <div className="container">
        <span className="copyright-info">
          &copy; 2019-2020 Maciej Kozłowski
        </span>
      </div>
      <style jsx>
        {`
          @import './styles/helpers.scss';
          @import './styles/variables.scss';

          .page-footer {
            background: $background-color;
            padding-top: 30px;
            color: $text-color;

            .footer-container {
              display: flex;
              justify-content: space-between;
            }
            font-size: 20px;

            .footer-email {
              display: flex;
              align-items: center;
              span {
                font-size: 20px;
              }

              a {
                display: flex;
                align-items: center;
              }
            }

            span {
              font-weight: 700;
            }
            a {
              text-decoration: none;
              color: $text-color;
              display: inline-block;
              padding: 0 16px;
              transition: 0.4s;
              &:hover {
                color: #fff;
              }
            }

            @media (max-width: $tablet-breakpoint) {
              padding: 10px 0;
              font-size: 12px;
              .footer-container {
                flex-direction: column;
                align-items: flex-start;
                width: 250px;
                margin: 0 auto;
              }
              .footer-email {
                span {
                  font-size: 12px;
                }
              }
              .footer-icons {
                font-size: 16px;
                a {
                  padding-right: 20px;
                  padding-left: 0;
                }
              }
              a {
                padding: 5px;
              }
            }

            &.emphasized a {
              color: #fff;
            }

            .copyright-info {
              font-size: 10px;
              display: block;
              text-align: right;
              margin-top: 5px;
              margin-bottom: 0;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
