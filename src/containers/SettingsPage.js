import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectFiatCurrency } from '../actions';

import FiatCurrencySelect from '../components/FiatCurrencySelect';

class SettingsPage extends Component {
  constructor (props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);
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
          <button onClick={this.navigateBack}>Back</button>
        </div>
      </div>
    );
  }

  navigateBack () {
    // TODO: Navigate back
  }

  onFiatCurrencyChange (selectedFiatCurrency) {
    this.props.dispatch(selectFiatCurrency(selectedFiatCurrency));
  }
}

SettingsPage.propTypes = {
  selectedFiatCurrency: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {selectedFiatCurrency} = state;

  return {
    selectedFiatCurrency,
  };
};

export default connect(mapStateToProps)(SettingsPage);
