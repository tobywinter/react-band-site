import React from "react";

import "./Home.css";

const CoverArt = props => {
  const { className, src, link } = props;

  return (
    <div className="coverContainer">
      <a href={link}>
        <img className={`${className}`} src={src} alt="cover art" />
      </a>
    </div>
  );
};

export default CoverArt;
