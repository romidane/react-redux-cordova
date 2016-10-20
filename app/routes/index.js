import React from "react";
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from "react-router";

import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Layout from '../layout';
import Dashboard from '../pages/dashboard';
import Example from '../pages/example';

import { EXAMPLE_PAGE } from '../constants/routes';

export default (store) => {
  const history = syncHistoryWithStore(browserHistory, store);

  return(
    <Provider store={store}>
      <Router history={history}>
        <Route component={ Layout }>
          <IndexRoute component={ Dashboard } />
          <Route name="Dashboard" path="/" component={ Dashboard }  />

          <Route name="Example" path={EXAMPLE_PAGE} component={ Example }  />
        </Route>
      </Router>
    </Provider>
  );
}
