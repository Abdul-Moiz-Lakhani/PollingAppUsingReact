import React from 'react';
import { Route, Router } from 'react-router-dom';
// import App from './components/CreatePoll';
import MainPage from './containers/MainPage';

import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

const AppRoutes = () => (
  (
    <Router history={customHistory}>
      <div>
          <Route path="/" component={MainPage} />
      </div>
    </Router>
  )
)

export default AppRoutes;