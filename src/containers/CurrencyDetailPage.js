import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCurrency, fetchCurrencies } from '../actions';

import CurrencyDetail from '../components/CurrencyDetail';

class CurrencyDetailPage extends Component {
  constructor (props) {
    super(props);

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount () {
    const {
      dispatch,
      match: {
        params: {
          symbol
        }
      },
      selectedFiatCurrency
    } = this.props;

    dispatch(selectCurrency(symbol, selectedFiatCurrency));
  }

  render () {
    const {
      currency,
      isFetching,
      selectedFiatCurrency
    } = this.props;

    return (
      <div>
        <header>
          <Link to='/settings'>Settings</Link>
        </header>

        <main>
          {isFetching && <h3>Loading...</h3>}
          {!isFetching && currency &&
          <CurrencyDetail selectedFiatCurrency={selectedFiatCurrency}
                          currency={currency}/>}

          <div>
            <Link to='/'>Back to list</Link>
          </div>


          <button onClick={this.refresh}>Refresh</button>
        </main>
      </div>
    );
  }

  refresh () {
    const {
      dispatch,
      match: {
        params: {
          symbol
        }
      },
      selectedFiatCurrency
    } = this.props;

    dispatch(fetchCurrencies(selectedFiatCurrency, symbol));
  }
}

CurrencyDetailPage.propTypes = {
  selectedFiatCurrency: PropTypes.string.isRequired,
  currency: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  const
    {selectedFiatCurrency, selectedCurrency, currencies} = state,
    {
      isFetching
    } = currencies || {
      isFetching: true
    };

  return {
    selectedFiatCurrency,
    currency: selectedCurrency,
    isFetching
  };
}

export default connect(mapStateToProps)(CurrencyDetailPage);