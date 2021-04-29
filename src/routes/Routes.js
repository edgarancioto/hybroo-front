import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import InstanceProblems from "../pages/InstanceProblems";
import Home from "../pages/Home";
import GettingStarted from "../pages/GettingStarted";
import PageLibrary from "../pages/PageLibrary";
import PageHybroo from "../pages/PageHybroo";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/instance-problems" component={InstanceProblems} />
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/library" component={PageLibrary} />
        <Route path="/hybroo" component={PageHybroo} />
      </Switch>
    </BrowserRouter>
  );
}
