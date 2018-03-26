import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FiatCurrencySelect extends Component {
  render () {
    const {value, onChange, options} = this.props;

    return (
      <select onChange={(event) => onChange(event.target.value)}
              value={value}>
        {options.map(option => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    );
  }
}

FiatCurrencySelect.FiatCurrencySelect = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};