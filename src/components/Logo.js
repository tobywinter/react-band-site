import React from "react";

import "./Home.scss";
const logoBlack = require("./assets/yawwn-black.png");
const logoWhite = require("./assets/yawwn-white.png");

const Logo = props => {
  const { colour } = props;

  const isLogoBlack = colour => {
    return colour === "black" ? logoBlack : logoWhite;
  };

  return (
    <div className="coverContainer">
      <img className="logo" src={isLogoBlack(colour)} alt="yawwn logo" />
    </div>
  );
};

export default Logo;
