import fetch from 'cross-fetch';

export const SELECT_FIAT_CURRENCY = 'SELECT_FIAT_CURRENCY';

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const INVALIDATE_CURRENCIES = 'INVALIDATE_CURRENCIES';

const API_ROOT_URL = 'https://api.coinmarketcap.com/v1/';

export function selectFiatCurrency (fiatCurrency) {
  return {
    type: SELECT_FIAT_CURRENCY,
    fiatCurrency
  };
}

function requestCurrencies () {
  return {
    type: REQUEST_CURRENCIES
  };
}

function receiveCurrencies (json, fiatCurrency) {
  return {
    type: RECEIVE_CURRENCIES,
    currencies: json
      .map((currency) => ({
        symbol: currency.symbol,
        price: currency[`price_${fiatCurrency.toLowerCase()}`],
        rank: currency.rank,
        change24h: currency.percent_change_24h
      }))
  };
}

export function fetchCurrencies (fiatCurrency) {
  return dispatch => {
    dispatch(requestCurrencies());
    return fetch(`${API_ROOT_URL}ticker/?convert=${fiatCurrency}&limit=100`)
      .then(response => response.json())
      .then(json => dispatch(receiveCurrencies(json, fiatCurrency)));
  };
}

export function fetchCurrenciesIfNeeded (fiatCurrency) {
  return (dispatch, getState) => {
    if (shouldFetchCurrencies(getState())) {
      return dispatch(fetchCurrencies(fiatCurrency));
    }
  };
}

function shouldFetchCurrencies (state) {
  const currencies = state.currencies;

  if (!currencies.items.length) {
    return true;
  } else if (currencies.isFetching) {
    return false;
  } else {
    return currencies.didInvalidate;
  }
}
