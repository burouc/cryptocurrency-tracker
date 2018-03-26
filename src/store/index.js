import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';

export const history = createHistory();

const
  initialState = {
    selectedFiatCurrency: 'USD'
  },
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk))
  );

export default store;