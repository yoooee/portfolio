import React from 'react';
import Navigation from './components/Navigation/Navigation';
import LogoMobile from './assets/logo-mobile.svg';
import LogoDesktop from './assets/logo-desktop.svg';
import {Routes, Route} from 'react-router';
import Design from './pages/Design/Design';
import Development from './pages/Development/Development';
import Illustration from './pages/Illustration/Illustration';
import Photography from './pages/Photography/Photography';
import './App.scss';

function App() {
  return (
      <div className="App">
        <header>
          <img className="logo-mobile" src={LogoMobile} alt="The Portfolio of Josef Staroba" />
          <img className="logo-desktop" src={LogoDesktop} alt="The Portfolio of Josef Staroba" />
        </header>
        <nav><Navigation /></nav> 
        <div className="portfolio">
          <Routes>
            <Route path="/design" element={<Design />} />
            <Route path="/development" element={<Development />} />
            <Route path="/illustration" element={<Illustration />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
