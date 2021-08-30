import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import PageApp from "../pages/PageApp";
import Recent from "../pages/Recent";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/login"  component={Login}  />
        <Route path="/forget-password"  component={ForgetPassword}  />
        <Route path="/register"  component={Register}  />
        <PrivateRoute path="/applications" component={PageApp} />
        <PrivateRoute path="/recent" component={Recent} />
      </Switch>
    </BrowserRouter>
  );
}
