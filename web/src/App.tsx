import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ItemList } from './components/ItemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemList />
      </header>
    </div>
  );
}

export default App;
