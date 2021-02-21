import React from 'react';
import ReactDOM from 'react-dom';

import TSPage from './TSPage';
import ModGen from './ModGen';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './NotFound';

ReactDOM.render(
  <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/create">
                    <ModGen/>
                </Route>
                <Route path="/:params">
                  <TSPage/>
                </Route>
                <Route >
                    <NotFound/>
                </Route>
            </Switch>
        </Router>  </React.StrictMode>,
  document.getElementById('root')
);
