import fetch from 'cross-fetch';

export const SELECT_FIAT_CURRENCY = 'SELECT_FIAT_CURRENCY';

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const INVALIDATE_CURRENCIES = 'INVALIDATE_CURRENCIES';

export const SELECT_CURRENCY = 'SELECT_CURRENCY';

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
        name: currency.name,
        price: currency[`price_${fiatCurrency.toLowerCase()}`],
        priceBtc: currency.price_btc,
        rank: currency.rank,
        volume24h: currency[`24h_volume_${fiatCurrency.toLowerCase()}`],
        marketCap: currency[`market_cap_${fiatCurrency.toLowerCase()}`],
        change1h: currency.percent_change_1h,
        change24h: currency.percent_change_24h,
        change7d: currency.percent_change_7d,
        supplyTotal: currency.total_supply,
        supplyAvailable: currency.available_supply
      }))
  };
}

export function fetchCurrencies (fiatCurrency, currencySymbol = null) {
  return dispatch => {
    dispatch(requestCurrencies());

    return fetch(`${API_ROOT_URL}ticker/?convert=${fiatCurrency}&limit=100`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveCurrencies(json, fiatCurrency));

        if (currencySymbol) {
          dispatch(selectCurrency(currencySymbol, fiatCurrency));
        }
      });
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

export function invalidateCurrencies () {
  return {
    type: INVALIDATE_CURRENCIES
  };
}

export function selectCurrency (currencySymbol, fiatCurrency) {
  return (dispatch, getState) => {
    const {currencies} = getState();

    if (!currencies || currencies.didInvalidate || !currencies.items.length) {
      dispatch(fetchCurrencies(fiatCurrency, currencySymbol));
    }
    else {
      return dispatch({
        type: SELECT_CURRENCY,
        currencySymbol,
        currencies: currencies.items
      });
    }
  };
}