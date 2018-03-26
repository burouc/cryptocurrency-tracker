import { SELECT_FIAT_CURRENCY, selectFiatCurrency } from './index';

describe('actions', () => {
  it('should create an action to select fiat currency', () => {
    const
      fiatCurrency = 'EUR',
      expectedAction = {
        type: SELECT_FIAT_CURRENCY,
        fiatCurrency
      };

    expect(selectFiatCurrency(fiatCurrency)).toEqual(expectedAction);
  });
});