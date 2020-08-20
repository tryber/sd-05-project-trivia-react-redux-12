import React from 'react';
import logo from './trivia.png';
import './App.css';
import TelaInicio from './components/tela-inicio';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TelaInicio />
        <p>
          SUA VEZ
        </p>
      </header>
    </div>
  );
}
