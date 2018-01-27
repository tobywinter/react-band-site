import React from "react";

import "./Home.scss";

const CoverArt = props => {
  const { className, src } = props;

  return (
    <div className="coverContainer">
      <img className={`${className}`} src={src} alt="cover art" />
    </div>
  );
};

export default CoverArt;
