/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import {
  App,
  Home,
  NotFound,
} from './containers';

export default (store) => { // eslint-disable-line}
  return (
    <Route path='/' component={App}>
      { /* Home route  */ }
      <IndexRoute component={Home} />
      { /* Error route */}
      <Route path='*' component={NotFound} status={404} />
    </Route>
  );
};

/* eslint react/jsx-filename-extension: 0 */

