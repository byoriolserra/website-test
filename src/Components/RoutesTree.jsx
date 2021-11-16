import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home/Home';
import { Art } from './Art/Art';
import { Code } from './Code/Code';
import { Contact } from './Contact/Contact';

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