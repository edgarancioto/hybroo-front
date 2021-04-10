import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import InstanceProblems from "../pages/InstanceProblems";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/instance-problems" component={InstanceProblems} />
      </Switch>
    </BrowserRouter>
  );
}
