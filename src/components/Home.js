import React, { Component } from "react";

import Logo from "./Logo";
import Quote from "./Quote";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="homePage">
          <h2 className="title">
            <Logo colour="black" />
          </h2>
        </div>
        <Quote
          quote="One of the most impressive debuts I've heard in quite some time"
          author="Crack In The Road"
        />
        <Quote
          quote="A preening piece of musical joy"
          author="Breaking More Waves"
        />
        <Quote
          quote="Indie pop with the perfect dash of psych"
          author="Too Many Blogs"
        />
      </div>
    );
  }
}

// <CoverArt
// className="art"
// src={partisanArtwork}
// link={`http://hyperurl.co/obtic5`}
// />
