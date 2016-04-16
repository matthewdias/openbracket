/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Routes
import Routes from './common/components/Routes';

// Base styling
import './common/base.css';

//Touch Events for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render((
  <Router history={browserHistory}>
    {Routes}
  </Router>
), document.getElementById(DOM_APP_EL_ID));

