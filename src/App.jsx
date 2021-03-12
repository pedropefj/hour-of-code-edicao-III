import { useEffect, useState } from 'react';
import './App.css';
import { FancyBoarder, SplitPane, Chat, Contacts, Feed} from './aulaIV';
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
          <SplitPane leftContent={<Chat/>} rightContent={<Contacts/>}>
            <Feed/>
          </SplitPane>
        </div>
      </header>
    </div>
  );
}

export default App;
