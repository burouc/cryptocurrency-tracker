import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CurrencyDetail from '../components/CurrencyDetail';

class CurrencyDetailPage extends Component {
  render () {
    return (
      <div>
        <header>
          <Link to="/settings">Settings</Link>
        </header>

        <main>
          <CurrencyDetail/>
        </main>
      </div>
    );
  }
}

export default CurrencyDetailPage;
