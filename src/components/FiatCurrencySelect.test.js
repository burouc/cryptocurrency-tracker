import React from 'react';
import { shallow } from 'enzyme';
import FiatCurrencySelect from './FiatCurrencySelect';

describe('FiatCurrencySelect', () => {
  const selectedCurrency = 'USD';

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FiatCurrencySelect options={['USD', 'EUR', 'CNY']}
                                          value={selectedCurrency}/>);
  });

  it('should render a select', () => {
    expect(wrapper.find('select').length).toEqual(1);
  });
});
