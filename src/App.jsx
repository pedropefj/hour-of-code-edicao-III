import React, { useEffect, useState } from 'react';
import './App.css';
import { AulaVHooks } from './aulaV'
import themes from './shared/theme';

export const ThemeContext = React.createContext(themes.light);

function App() {

  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    setTimeout(() => {
      setTheme(themes.dark);
    }, 5000);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <ThemeContext.Provider value={theme}>
            <AulaVHooks/>
          </ThemeContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
