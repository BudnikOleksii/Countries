import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path=":filterType" element={<App />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
