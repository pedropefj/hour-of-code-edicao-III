import React, { useEffect, useState } from 'react';
import './App.css';
import { AulaVHooks } from './aulaV'
import { Boards } from './MVPTrello';
import { DefaultPage, Header } from './shared/components';
import themes from './shared/theme';

export const ThemeContext = React.createContext(themes.light);

function App() {

  // const [darkMode, setDarkMode] = useState(false);

  // const handleSwitchDarkMode = () => {
  //   setDarkMode((darkMode) => !darkMode);
  // };



  return (
    <div className="App">
      <header className="App-header">
        <div className="root">
          <Header>MPV Trello</Header>
          <Boards/>
        </div>
      </header>
    </div>
  );
}

export default App;
