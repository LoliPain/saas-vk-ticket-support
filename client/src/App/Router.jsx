import React from 'react';
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { authTyping, emptyAuthData, getAuthData } from '../Core/store/auth';

import PageError from '../components/PageError';
import Core from '../Core';

const history = createBrowserHistory();

const Index = ({ auth }) => (
  (auth !== emptyAuthData)
    ? <Route><Core authData={auth} /></Route>
    : <Route><Core /></Route>
);

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Index exact path="/" auth={getAuthData()} />
      <Route path="/error" component={PageError} />
      <Redirect to="/error" />
    </Switch>
  </Router>
);

Index.propTypes = {
  auth: authTyping.isRequired,
};

export default Routes;
