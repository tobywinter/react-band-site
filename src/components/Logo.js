import React from 'react';

import './Home.scss';

const logoBold = require('./assets/YAWWNLogo.svg');

const Logo = () => {
  return (
    <div className="coverContainer">
      <img className="logo" src={logoBold} alt="yawwn logo" />
    </div>
  );
};

export default Logo;
