import React, { Component } from "react";

import CoverArt from "./CoverArt";
import Logo from "./Logo";
import Quote from "./Quote";
import "./Home.css";
const partisanArtwork = require("./assets/partisan-artwork.png");

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="homePage">
          <h2 className="title">
            <Logo colour="black" />
          </h2>
          <CoverArt
            className="art"
            src={partisanArtwork}
            link={`http://hyperurl.co/obtic5`}
          />
        </div>
      </div>
    );
  }
}
