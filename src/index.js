import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import store, { history } from './store';
import Root from './containers/Root';

render(
  <Provider store={store}>
    <Router history={history}>
      <Root/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
