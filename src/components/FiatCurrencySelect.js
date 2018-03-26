import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FiatCurrencySelect extends Component {
  render () {
    const {value, onChange, options} = this.props;

    return (
      <p>
        <label htmlFor='fiatCurrencySelect'>Fiat currency:</label>
        <select className='form-control-sm'
                id='fiatCurrencySelect'
                onChange={(event) => onChange(event.target.value)}
                value={value}>
          {options.map(option => (
            <option value={option} key={option}>{option}</option>
          ))}
        </select>
      </p>
    );
  }
}

FiatCurrencySelect.FiatCurrencySelect = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};