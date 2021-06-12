import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Dashboard from '../Views/Dashboard/Dashboard';
import Login from '../Views/Login/Login';
import { dashboard, rootpath } from './Path';
const pageconfig = [
    {
        path: rootpath,
        component: Login
    },
    {
        path: dashboard,
        component: Dashboard
    }
]
export default function CustomRoute() {
    return (
        <div className="CustomRoute">
            <Router>
                <Switch>
                    {pageconfig.map((page) =>
                        <Route key={Math.random()} exact path={page.path} component={page.component} />
                    )}
                </Switch>
            </Router>
        </div>
    )
}
