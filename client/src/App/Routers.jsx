import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import PageError from '../components/PageError';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
