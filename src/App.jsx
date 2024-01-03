import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './containers/Homepage/Homepage';

function App() {
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
}

export default App;
