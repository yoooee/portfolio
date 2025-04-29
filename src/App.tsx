import React from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.scss';

function App() {
  return (
      <div className="App">
        <header>
          <div data-testid="logo" className="logo"></div>
        </header>
        <nav><Navigation /></nav> 
      </div>
  );
}

export default App;
