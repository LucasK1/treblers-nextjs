import React, { Component } from "react";
import YouTube from "react-youtube";
import "./Videos.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import ScrollHelper from "../ScrollHelper/ScrollHelper";

export default class Videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opts: {
        height: window.innerWidth <= 600 ? window.innerWidth / (16 / 9) : 340,
        width: window.innerWidth <= 600 ? window.innerWidth : 600,
        playerVars: {
          autoplay: 0
        }
      }
    };
  }

  handleResize = () => {
    this.setState({
      opts: {
        height: window.innerWidth <= 600 ? window.innerWidth / (16 / 9) : 340,
        width: window.innerWidth <= 600 ? window.innerWidth : 600
      }
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
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
                rel="noopener noreferrer"
              >
                <span>Więcej filmów</span>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
