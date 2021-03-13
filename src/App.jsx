import React, { useEffect, useState } from 'react';
import './App.css';
import { AulaVHooks } from './aulaV'
import { Boards, BoardDetails } from './MVPTrello';
import { DefaultPage, Header } from './shared/components';
import themes from './shared/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const ThemeContext = React.createContext(themes.light);

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
          <div className="root">
            <Switch>
              <Route path="/" exact>
                <Boards />
              </Route>
              <Route path="/board/:id">
                <BoardDetails />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
