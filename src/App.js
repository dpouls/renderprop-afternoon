import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter'
import CurrencyDisplay from './Components/CurrencyDisplay'

class App extends Component {
  
  render() {
    return (
      <>
        <h2>RANDR PROPOS</h2>
    <CurrencyConverter render={(currencyData, amount) => (
      <CurrencyDisplay currencyData={currencyData} amount={amount}/>
    )}/>
      </>
    );
  }

}

export default App;
