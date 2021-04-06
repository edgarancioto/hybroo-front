import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import InstanceProblems from '../pages/InstanceProblems'
import Home from '../pages/Home'

const reload = () => window.location.reload();

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
							<Redirect exact from="/" to="/home.html" onEnter={reload}  />
            	<Route path='/instance-problems' component={InstanceProblems}  />
              <Route path='/home' component={Home} />
            </Switch>
        </BrowserRouter>
    );
}