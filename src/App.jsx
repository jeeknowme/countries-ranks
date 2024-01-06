import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/routes';
import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const CountryPage = React.lazy(() => import('./pages/CountryPage'));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.COUNTRY} element={<CountryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
