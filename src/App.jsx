import React, { useEffect, useState } from 'react';
import './App.css';
import { AulaVHooks } from './aulaV'
import themes from './shared/theme';

export const ThemeContext = React.createContext(themes.light);

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const handleSwitchDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };



  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
        <ThemeContext.Provider value={darkMode ? themes.dark : themes.light}>
            <AulaVHooks handleSwitchDarkMode={handleSwitchDarkMode} darkMode={darkMode} />
          </ThemeContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
