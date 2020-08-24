import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import TelaInicio from './components/tela-inicio';
import logo from './trivia.png';
import TelaConfig from './components/tela-configuracoes';
/* import md5 from './APIs/Gravatar'; */
import Teste from './APIs/testes-api';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TelaInicio /> */}
        <p>SUA VEZ</p>
        <BrowserRouter>
          <Switch>
            <Route exact path="/src" component={TelaConfig} />
            <Route exact path="/" component={TelaInicio} />
            <Route path="/testes" component={Teste} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}
