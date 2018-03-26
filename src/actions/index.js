export const SELECT_FIAT_CURRENCY = 'SELECT_FIAT_CURRENCY';

export function selectFiatCurrency (fiatCurrency) {
  return {
    type: SELECT_FIAT_CURRENCY,
    fiatCurrency,
  };
}