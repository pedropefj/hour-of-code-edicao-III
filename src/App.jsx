import React, { useEffect, useState } from 'react';
import './App.css';
import { AulaVHooks } from './aulaV'
import { Boards, BoardDetails } from './MVPTrello';
import { DefaultPage, Header } from './shared/components';
import themes from './shared/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getMaterialUItheme } from './shared/theme';
import { ThemeProvider } from '@material-ui/styles';

export const ThemeContext = React.createContext(themes.light);


function App() {

  const [themeType, setTheme] = useState('light');

  const materialUItheme = getMaterialUItheme(themeType);

  const handleSwitchDarkMode = () => {
    setTheme((themeType) => (themeType === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ThemeProvider theme={materialUItheme}>
            <Header darkMode={themeType === 'dark'} handleSwitchDarkMode={handleSwitchDarkMode} />
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
            </ThemeProvider>
        </Router>
      </header>
    </div>
  );
}

export default App;
