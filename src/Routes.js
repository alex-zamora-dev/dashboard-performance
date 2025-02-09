import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
