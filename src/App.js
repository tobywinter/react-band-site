import React, { Component } from "react";
import "./App.css";

import Home from "./components/Home";
import Quote from "./components/Quote";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
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

export default App;
