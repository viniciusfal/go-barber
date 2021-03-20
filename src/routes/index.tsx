import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';
import Dashboard from '../page/Dashboard';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    );
};
export default Routes;
