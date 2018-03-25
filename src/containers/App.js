import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import CurrencyDetail from '../components/CurrencyDetail';
import CurrenciesList from '../components/CurrenciesList';

class App extends Component {
  render () {
    return (
      <div>
        <header>
          <Link to="/settings">Settings</Link>
        </header>

        <main>
          <Route exact path="/" component={CurrenciesList}/>
          <Route exact path="/currency/:symbol" component={CurrencyDetail}/>
        </main>
      </div>
    );
  }
}

export default App;
