import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { find } from 'lodash';

import {
  SELECT_FIAT_CURRENCY,
  REQUEST_CURRENCIES,
  RECEIVE_CURRENCIES,
  INVALIDATE_CURRENCIES
} from '../actions';
import { SELECT_CURRENCY } from '../actions/index';

const selectedFiatCurrency = (state = 'USD', action) => {
  switch (action.type) {
    case SELECT_FIAT_CURRENCY:
      return action.fiatCurrency;
    default:
      return state;
  }
};

const currencies = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action) => {
  switch (action.type) {
    case INVALIDATE_CURRENCIES:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_CURRENCIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_CURRENCIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.currencies
      });
    default:
      return state;
  }
};

const selectedCurrency = (state = null, action) => {
  switch (action.type) {
    case SELECT_CURRENCY:
      const currency = find(action.currencies,
        {'symbol': action.currencySymbol});

      return currency || null;
    default:
      return state;
  }
};

export default combineReducers({
  routing: routerReducer,
  selectedFiatCurrency,
  currencies,
  selectedCurrency
});