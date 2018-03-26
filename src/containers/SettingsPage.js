import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectFiatCurrency, invalidateCurrencies } from '../actions';

import FiatCurrencySelect from '../components/FiatCurrencySelect';

class SettingsPage extends Component {
  constructor (props) {
    super(props);

    this.onFiatCurrencyChange = this.onFiatCurrencyChange.bind(this);
  }

  render () {
    return (
      <div>
        <header>
          <h1>
            Settings
          </h1>
        </header>
        <main>
          <FiatCurrencySelect
            value={this.props.selectedFiatCurrency}
            onChange={this.onFiatCurrencyChange}
            options={['USD', 'EUR', 'CNY']}/>
        </main>

        <div>
          <Link to={this.getBackUrl()}>Back</Link>
        </div>
      </div>
    );
  }

  getBackUrl () {
    const {state} = this.props;

    if (state && state.currency) {
      return `/currency/${state.currency}`;
    }

    return '/';
  }

  onFiatCurrencyChange (selectedFiatCurrency) {
    this.props.dispatch(selectFiatCurrency(selectedFiatCurrency));
    this.props.dispatch(invalidateCurrencies());
  }
}

SettingsPage.propTypes = {
  selectedFiatCurrency: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const {selectedFiatCurrency} = state;

  return {
    selectedFiatCurrency
  };
};

export default connect(mapStateToProps)(SettingsPage);
