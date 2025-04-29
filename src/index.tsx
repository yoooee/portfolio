import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router';
import {Routes, Route} from 'react-router';
import Design from './pages/Design/Design';
import Development from './pages/Development/Development';
import Illustration from './pages/Illustration/Illustration';
import Photography from './pages/Photography/Photography';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/design" element={<Design />} />
        <Route path="/development" element={<Development />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
