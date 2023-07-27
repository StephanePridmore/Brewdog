import React from 'react';
import './App.scss';
import BrewdogGrid from './shared/components/grid/BrewdogGrid';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Catalogue</h1>
        <BrewdogGrid></BrewdogGrid>
      </div>
    </div>
  );
}

export default App;
