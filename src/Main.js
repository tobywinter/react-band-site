import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Events from "./components/Events";
import Listen from "./components/Listen";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/live" component={Events} />
      <Route path="/listen" component={Listen} />
    </Switch>
  </main>
);

export default Main;
