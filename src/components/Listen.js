import React, { Component } from "react";

import CoverArt from "./CoverArt";
import Logo from "./Logo";
import "./Listen.css";
const partisanArtwork = require("./assets/partisan-art-small.jpg");
const beAManArtwork = require("./assets/be-a-man-art.jpg");
const bodyImInArtwork = require("./assets/body-im-in-art.jpg");

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="homePage">
          <h2 className="title">
            <Logo colour="black" />
          </h2>
          <div className="wrapper">
            <CoverArt
              className="art"
              src={partisanArtwork}
              link={`http://hyperurl.co/obtic5`}
            />
            <CoverArt
              className="art"
              src={beAManArtwork}
              link={`http://hyperurl.co/atbw3u`}
            />
            <CoverArt
              className="art"
              src={bodyImInArtwork}
              link={`http://hyperurl.co/ya7m3h`}
            />
          </div>
        </div>
      </div>
    );
  }
}
