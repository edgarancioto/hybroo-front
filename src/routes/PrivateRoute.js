import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';

import { Route, Redirect } from 'react-router-dom';

const RouterPrivate = ({ component, ...rest }) => {
    //const { signed } = useContext(AuthContext);
    const signed = true 
    const routeComponent = (props) => (
        signed ? 
        React.createElement(component, props) 
        : <Redirect to={{pathname:'/login'}}/>
    );
    return <Route { ...rest } render={ routeComponent }/>
};

export default RouterPrivate;