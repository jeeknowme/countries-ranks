import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/routes';
import React from 'react';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const CountryPage = lazy(() => import('./pages/CountryPage'));
import LoadingSpinner from './components/Spinner/LoadingSpinner';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import CountryPage from './pages/CountryPage';

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.COUNTRY} element={<CountryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
