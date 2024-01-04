import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './containers/Homepage/Homepage';
import CountryPage from './containers/Countrypage/CountryPage';

function App() {
  return (
    <>
      <Header />
      {/* <Homepage /> */}
      <CountryPage />
    </>
  );
}

export default App;
