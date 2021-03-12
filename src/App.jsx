import { useEffect, useState } from 'react';
import './App.css';
import { AulaVHooks } from './aulaV'
function App() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <AulaVHooks/>
        </div>
      </header>
    </div>
  );
}

export default App;
