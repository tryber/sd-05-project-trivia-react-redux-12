import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Playing from './components/playing/Playing';
import Config from './components/config/config';
import Rank from './components/rank/rank';
import Feedback from './components/feedback/Feedback';
import NotFound from './components/NotFound/NotFound';

export default function App() {
  return (
    <div className="App">
      <header className="App-header flex-me">
        <BrowserRouter>
          <Switch>
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/ranking" component={Rank} />
            <Route exact path="/config" component={Config} />
            <Route exact path="/playing" component={Playing} />
            <Route exact path="/" component={Login} />
            <Route path="/" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}
