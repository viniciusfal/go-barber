import React from 'react';
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface MyRouteProps extends ReactDOMRouteProps {
    isPrivate?: Boolean;
    component: React.ComponentType;
}

const Route: React.FC<MyRouteProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { user } = useAuth();

    return (
        <ReactDOMRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: isPrivate ? '/' : '/dashboard',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
};

export default Route;
