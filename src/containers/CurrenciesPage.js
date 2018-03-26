import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCurrenciesIfNeeded, fetchCurrencies } from '../actions';

import CurrenciesList from '../components/CurrenciesList';

class CurrenciesPage extends Component {
  constructor (props) {
    super(props);

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount () {
    const {dispatch, selectedFiatCurrency} = this.props;

    dispatch(fetchCurrenciesIfNeeded(selectedFiatCurrency));
  }

  render () {
    const {items, isFetching, selectedFiatCurrency} = this.props;

    return (
      <div>
        <header>
          <Link to="/settings">Settings</Link>
        </header>

        <main>
          {isFetching && items.length === 0 && <h3>Loading...</h3>}
          {!isFetching && items.length === 0 && <h3>Empty.</h3>}
          {items.length > 0 &&
          <div style={{opacity: isFetching ? 0.5 : 1}}>
            <CurrenciesList currencies={items}
                            selectedFiatCurrency={selectedFiatCurrency}/>
          </div>}

          <button onClick={this.refresh}>Refresh</button>
        </main>
      </div>
    );
  }

  refresh () {
    const {dispatch, selectedFiatCurrency} = this.props;

    dispatch(fetchCurrencies(selectedFiatCurrency));
  }
}

CurrenciesPage.propTypes = {
  selectedFiatCurrency: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  const
    {selectedFiatCurrency, currencies} = state,
    {
      isFetching,
      items
    } = currencies || {
      isFetching: true,
      items: []
    };

  return {
    selectedFiatCurrency,
    items,
    isFetching
  };
}

export default connect(mapStateToProps)(CurrenciesPage);
