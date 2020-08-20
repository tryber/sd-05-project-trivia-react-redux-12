import React from "react";
import logo from "./trivia.png";
import "./App.css";
import TelaInicio from "./components/tela-inicio";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import TelaConfig from "./components/tela-configuracoes";

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
            <Route path="/" component={() => <h1>Deu ruim</h1>} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}
