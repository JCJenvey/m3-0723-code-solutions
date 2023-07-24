import './App.css';
import Switch from './Switch';
import { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const state = isClicked
    ? 'App-header BackgroundLight'
    : 'App-header BackgroundDark';

  const handleBackground = () => setIsClicked(!isClicked);
  return (
    <div className="App">
      <header className={state}>
        <Switch onChangeBackground={handleBackground} />
      </header>
    </div>
  );
}

export default App;
