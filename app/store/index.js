import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';

import { routerMiddleware, connectRouter } from 'connected-react-router';
import reducer from '../reducers';

export const history = createBrowserHistory();

const reducers = combineReducers(
  {
    app: reducer,
    router: connectRouter(history),
  },
  applyMiddleware(routerMiddleware(history)),
);

const store = createStore(reducers);

export default store;
