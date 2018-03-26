import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  selectFiatCurrency,
  invalidateCurrencies
} from '../actions';

import FiatCurrencySelect from '../components/FiatCurrencySelect';

class SettingsPage extends Component {
  constructor (props) {
    super(props);

    this.onFiatCurrencyChange = this.onFiatCurrencyChange.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
  }

  render () {
    return (
      <div className='container'>
        <header>
          <h3>
            Settings
          </h3>
        </header>
        <main>
          <FiatCurrencySelect
            value={this.props.selectedFiatCurrency}
            onChange={this.onFiatCurrencyChange}
            options={['USD', 'EUR', 'CNY']}/>
        </main>

        <div>
          <button className='btn btn-primary' onClick={this.navigateBack}>Back
          </button>
        </div>
      </div>
    );
  }

  navigateBack () {
    this.props.history.goBack();
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
