import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class CurrenciesList extends Component {
  render () {
    const {currencies, selectedFiatCurrency} = this.props;

    return (
      <table className='table text-right'>
        <thead>
        <tr>
          <th>Rank</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
        </thead>
        <tbody>
        {currencies
          .map((currency, i) =>
            <tr key={i}>
              <td>{currency.rank}</td>
              <td>
                <Link to={`/currency/${currency.symbol}`}>
                  {currency.symbol}
                </Link>
              </td>
              <td>{currency.price} {selectedFiatCurrency}</td>
              <td>{currency.change24h}%</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

CurrenciesList.propTypes = {
  selectedFiatCurrency: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired
};

export default CurrenciesList;
