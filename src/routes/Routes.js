import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
// import DashboardHome from "../pages/DashboardHome";
import PageApp from "../pages/PageApp";
import Recent from "../pages/Recent";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}  />
        {/* <Route path="/dashboard-home" component={DashboardHome} /> */}
        <Route path="/applications" component={PageApp} />
        <Route path="/recent" component={Recent} />
      </Switch>
    </BrowserRouter>
  );
}
