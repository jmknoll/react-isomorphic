/* eslint no-underscore-dangle: 0, react/jsx-filename-extension: 0, no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from './redux/createStore';
import getRoutes from './routes';

const dest = global.document.getElementById('root');
const store = createStore(browserHistory, global.__data);
const history = syncHistoryWithStore(browserHistory, store);

const component = (
  <Router history={history}>
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key='provider'>
    {component}
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  global.React = React; // debug!
}

if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
  console.error('Server side react render was discarded, make sure your initial render does not contain any client-side code')
}

if (__DEVTOOLS__ && !global.devToolsExtension) {
  const DevTools = require('./containers/DevTools'); // eslint-disable-line
  ReactDOM.render(
    <Provider store={store} key="provider">
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    dest
  );
}