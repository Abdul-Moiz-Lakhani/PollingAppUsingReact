import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import App from './components/CreatePoll';
import MainPage from './containers/mainPage';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();


const AppRoutes = () => (
  (
    <Router history={customHistory}>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage}>
            <Route path="/createpoll" component={App} />
            <Route path="/previouspolls" component="" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
)

export default AppRoutes;