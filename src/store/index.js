import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';

export const history = createHistory();

const
  initialState = {},
  middleware = [
    thunk,
    routerMiddleware(history),
  ],
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware)),
  );

export default store;