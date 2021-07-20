import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
// import DashboardHome from "../pages/DashboardHome";
import PageApp from "../pages/PageApp";
import Recent from "../pages/Recent";
import Login from "../pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/login"  component={Login}  />
        {/* <Route path="/dashboard-home" component={DashboardHome} /> */}
        <Route path="/applications" component={PageApp} />
        <Route path="/recent" component={Recent} />
      </Switch>
    </BrowserRouter>
  );
}
