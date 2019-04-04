import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./Main";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
