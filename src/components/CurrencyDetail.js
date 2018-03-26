import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencyDetail extends Component {
  renderRow (i, row) {
    const {currency, selectedFiatCurrency} = this.props,
      rowsWithPercentge = ['change1h', 'change24h', 'change7d'];

    return (
      <tr key={i}>
        <td>
          <strong>
            {row.label}
          </strong>
        </td>
        <td>
          {currency[row.key]} {(row.key === 'price' ||
          row.key === 'volume24h') && selectedFiatCurrency}
          {rowsWithPercentge.includes(row.key) && '%'}
        </td>
      </tr>
    );
  }

  render () {
    const rows = [
      {key: 'rank', label: 'Rank'},
      {key: 'symbol', label: 'Symbol'},
      {key: 'name', label: 'Name'},
      {key: 'price', label: 'Price'},
      {key: 'volume24h', label: '24hr volume'},
      {key: 'marketCap', label: '24hr market cap'},
      {key: 'priceBtc', label: 'Price in BTC'},
      {key: 'change1h', label: '1h change'},
      {key: 'change24h', label: '24h change'},
      {key: 'change7d', label: '7d change'},
      {key: 'supplyTotal', label: 'Total supply'},
      {key: 'supplyAvailable', label: 'Available supply'}
    ];

    return (
      <div>
        <table className='table text-right'>
          <tbody>
          {rows
            .map((row, i) =>
              this.renderRow(i, row)
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

CurrencyDetail.propTypes = {
  selectedFiatCurrency: PropTypes.string.isRequired,
  currency: PropTypes.object.isRequired
};

export default CurrencyDetail;
