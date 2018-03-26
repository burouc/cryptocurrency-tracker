import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CurrenciesList from '../components/CurrenciesList';

class CurrenciesPage extends Component {
  render () {
    return (
      <div>
        <header>
          <Link to="/settings">Settings</Link>
        </header>
        
        <main>
          <CurrenciesList/>
        </main>
      </div>
    );
  }
}

export default CurrenciesPage;
