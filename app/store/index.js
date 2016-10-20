import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  app: reducer,
  routing: routerReducer
}, applyMiddleware(sagaMiddleware))

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);


export default store;
