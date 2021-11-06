import React from 'react';
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { authTyping, emptyAuthData, getAuthData } from './store/auth';

import PageError from '../components/PageError';
import Core from '../Core';

const history = createBrowserHistory();

const Index = ({ authData }) => (
  (authData !== emptyAuthData)
    ? <Route exact path="/"><Core authData={authData} /></Route>
    : <Redirect to="/preview" />
);

const Routes = () => {
  const authData = getAuthData();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/preview">{authData === emptyAuthData ? <Core /> : <Redirect to="/" />}</Route>
        <Index authData={authData} />
        <Route path="/sometimessomethinggoeswrong" component={PageError} />
        <Redirect to="/sometimessomethinggoeswrong" />
      </Switch>
    </Router>
  );
};

Index.propTypes = {
  authData: authTyping.isRequired,
};

export default Routes;
