import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './Videos.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import ScrollHelper from '../ScrollHelper/ScrollHelper';

export default class Videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opts: {},
    };
  }

  handleResize = () => {
    this.setState({
      opts: {
        height: window.innerWidth <= 600 ? window.innerWidth / (16 / 9) : 340,
        width: window.innerWidth <= 600 ? window.innerWidth : 600,
      },
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.setState({
      ...this.state,
      opts: {
        height: window.innerWidth <= 600 ? window.innerWidth / (16 / 9) : 340,
        width: window.innerWidth <= 600 ? window.innerWidth : 600,
        playerVars: {
          autoplay: 0,
        },
      },
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    return (
      <section className="page-videos-wrapper">
        <div className="container">
          <div className="page-videos">
            <div className="video">
              <YouTube
                videoId="Gw6OVi96oz0"
                opts={this.state.opts}
                onReady={this._onReady}
              />
            </div>
            <div className="video">
              <YouTube
                videoId="clRlY-sbz3M"
                opts={this.state.opts}
                onReady={this._onReady}
              />
            </div>
            <ScrollHelper className="page-gallery-scroll" height="100px" />
          </div>
        </div>
        <div className="page-videos__button-wrapper">
          <div className="container">
            <div className="link-wrapper">
              <a
                href="https://www.youtube.com/channel/UCsTwnnYrrRD43gKz2XFLzYQ"
                target="_blank"
                rel="noopener noreferrer">
                <span>Więcej filmów</span>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            @import './styles/helpers.scss';
            @import './styles/variables.scss';

            .page-videos-wrapper {
              background: #151515;
              padding-top: 40px;
              box-shadow: 0 -3px 6px rgba(#000, 0.54);
            }

            .page-videos {
              display: flex;
              position: relative;
              padding-bottom: 20px;
              .video {
                width: 50%;
              }

              &__button-wrapper {
                color: $background-color;

                padding-bottom: 24px;
                .link-wrapper {
                  display: flex;
                  justify-content: center;
                }

                a {
                  font-weight: 800;
                  padding: 4px 24px;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  margin: 0 auto;
                  color: $text-color;
                  background-color: #7db9b9;
                  border-radius: 6px;

                  box-shadow: 0 1px 3px #555;
                  transition: transform 0.3s;

                  &:hover {
                    transform: scale(1.12);
                  }
                }

                span {
                  padding-right: 20px;
                  font-size: 20px;
                  text-transform: uppercase;
                }

                .icon-wrapper {
                  font-size: 30px;
                }
              }
            }

            .page-videos-button {
              border-radius: 6px;
              display: flex;
              align-items: center;
              a {
                display: block;
                height: 100%;
                width: 100%;
                color: $background-color;
                text-decoration: none;
                font-size: 20px;
                padding-bottom: 20px;
                text-align: right;
                transition: 0.4s;
                &:hover {
                  color: #fff;
                }
              }
            }

            @media (max-width: $container-width) {
              .page-videos {
                display: block;
                .video {
                  width: 100%;
                }
              }
            }
          `}
        </style>
      </section>
    );
  }
}
