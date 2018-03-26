import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SettingsPage from './SettingsPage';
import CurrencyDetailPage from './CurrencyDetailPage';
import CurrenciesPage from './CurrenciesPage';

class Root extends Component {
  render () {
    return (
      <div>
        <Route exact path="/" component={CurrenciesPage}/>
        <Route exact path="/currency/:symbol" component={CurrencyDetailPage}/>
        <Route exact path="/settings" component={SettingsPage}/>
      </div>
    );
  }
}

export default Root;
