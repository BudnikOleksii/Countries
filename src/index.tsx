import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './app/store';
import { CountryModal } from './components/CountryModal';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="country">
            <Route path=":name" element={<CountryModal />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
