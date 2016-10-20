import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import store from './store';
import routes from './routes';
import Styles from './assets/scss/main.css';

render(routes(store), document.getElementById("app"));
