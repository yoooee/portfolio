import React from 'react';
import Navigation from './components/Navigation/Navigation';
import LogoMobile from './assets/logo-mobile.svg';
import LogoDesktop from './assets/logo-desktop.svg';
import './App.scss';

function App() {
  return (
      <div className="App">
        <header>
          <img className="logo-mobile" src={LogoMobile} alt="The Portfolio of Josef Staroba" />
          <img className="logo-desktop" src={LogoDesktop} alt="The Portfolio of Josef Staroba" />
        </header>
        <nav><Navigation /></nav> 
      </div>
  );
}

export default App;
