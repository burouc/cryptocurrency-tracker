import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { SELECT_FIAT_CURRENCY } from '../actions';

const selectedFiatCurrency = (state = 'USD', action) => {
  switch (action.type) {
    case SELECT_FIAT_CURRENCY:
      return action.fiatCurrency;
    default:
      return state;
  }
};

export default combineReducers({
  routing: routerReducer,
  selectedFiatCurrency,
});