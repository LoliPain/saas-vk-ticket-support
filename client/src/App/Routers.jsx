import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import PageError from '../components/PageError';

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/project" />
      <Route path="/authenticate" component={} />
      <Route path="/project" component={} />
      <Route component={PageError} />
    </Switch>
  </Router>
);
