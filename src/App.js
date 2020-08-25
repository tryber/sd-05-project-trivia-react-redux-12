import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import TelaInicio from './components/tela-inicio';
import TelaConfig from './components/tela-configuracoes';
import TelaDejogo from './components/tela-jogo'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/src" component={TelaConfig} />
            <Route exact path="/" component={TelaInicio} />
            <Route exact path="/telaDejogo" component={TelaDejogo} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}
