import React, { useContext } from "react";
import { AuthContext } from "../context/useAuthContext";

import { Route, Redirect } from "react-router-dom";

const RouterPrivate = ({ component, ...rest }) => {
  const { user } = useContext(AuthContext);

  const routeComponent = (props) =>
    !!user ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default RouterPrivate;
