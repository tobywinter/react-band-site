import React, { Component } from "react";

import Button from "./Button";
import CoverArt from "./CoverArt";
import Logo from "./Logo";
import "./Home.css";
const partisanArtwork = require("./assets/partisan-artwork.png");

export default class Home extends Component {
  state = { home: true, listen: false, live: false };

  showEvents = () => {
    this.setState(prevState => ({
      home: false,
      listen: false,
      live: true
    }));
  };

  showListen = () => {
    this.setState(prevState => ({
      home: false,
      listen: true,
      live: false
    }));
  };

  render() {
    return (
      <div className="homePage">
        <h2 className="title">
          <Button
            className="nav"
            label="Listen"
            handleClick={this.showListen}
          />
          <Button className="nav" label="Live" handleClick={this.showEvents} />
          <Logo colour="black" />
        </h2>
        <CoverArt className="art" src={partisanArtwork} />
      </div>
    );
  }
}
