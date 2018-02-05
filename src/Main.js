import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Events from "./components/Events";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/live" component={Events} />
    </Switch>
  </main>
);

export default Main;
