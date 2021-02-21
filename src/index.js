import React from 'react';
import ReactDOM from 'react-dom';

import TSPage from './TSPage';
import ModGen from './ModGen';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/create">
                    <ModGen/>
                </Route>
                <Route path="/:params">
                  <TSPage/>
                </Route>
            </Switch>
        </Router>  </React.StrictMode>,
  document.getElementById('root')
);
