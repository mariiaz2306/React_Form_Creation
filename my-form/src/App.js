import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Checkout from './components/Checkout/Checkout';
import FormComponent  from './components/Form/FormComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <Checkout />
      <FormComponent/>
    </div>
  );
}

export default App;
