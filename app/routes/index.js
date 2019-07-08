import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Layout from '../layout';
import Dashboard from '../pages/dashboard';
import Example from '../pages/example';

import { EXAMPLE_PAGE } from '../constants/routes';

export default (store, history) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path={EXAMPLE_PAGE} component={Example} />
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    </BrowserRouter>
  );
};
