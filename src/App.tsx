import React from 'react';
import { NavLink, Routes, Route} from 'react-router';
import Navigation from './components/Navigation/Navigation';
import LogoMobile from './assets/logo-mobile.svg';
import LogoDesktop from './assets/logo-desktop.svg';
import Home from './pages/Home/Home';
import Design from './pages/Design/Design';
import Development from './pages/Development/Development';
import Illustration from './pages/Illustration/Illustration';
import Photography from './pages/Photography/Photography';
import './App.scss';

function App() {
  return (
      <div className="App">
        <header>
          <NavLink to="/">
            <img className="logo-mobile" src={LogoMobile} alt="The Portfolio of Josef Staroba" />
            <img className="logo-desktop" src={LogoDesktop} alt="The Portfolio of Josef Staroba" />
          </NavLink>
        </header>
        <nav><Navigation /></nav> 
        <div className="portfolio">
          <Routes>
            <Route path="/design" element={<Design />} />
            <Route path="/development" element={<Development />} />
            <Route path="/illustration" element={<Illustration />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
