import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Art } from './Art';
import { Code } from './Code';
import { Contact } from './Contact';

const RoutesTree = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/art">
                    <Art />
                </Route>
                <Route path="/code">
                    <Code />
                </Route>
                <Route path="contact">
                    <Contact />
                </Route>
            </Switch>
        </div>
    );
};

export default RoutesTree;