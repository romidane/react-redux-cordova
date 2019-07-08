import React from 'react';
import { render } from 'react-dom';
import store, { history } from './store';
import routes from './routes';
import Styles from './assets/scss/main.scss';

if (window.cordova) {
  // Cordova application
  document.addEventListener(
    'deviceready',
    () => {
      render(routes(store, history), document.getElementById('app'));
    },
    false,
  );
} else {
  // Web page
  render(routes(store, history), document.getElementById('app'));
}
