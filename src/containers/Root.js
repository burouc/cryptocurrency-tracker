import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SettingsPage from './SettingsPage';
import App from './App';

class Root extends Component {
  render () {
    return (
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/currency/:symbol" component={App}/>
        <Route exact path="/settings" component={SettingsPage}/>
      </div>
    );
  }
}

export default Root;
