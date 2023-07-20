import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ToggleButton text="Btn1" color="red" />
          <ToggleButton text="Btn2" color="green" />
          <ToggleButton text="Btn3" color="blue" />
        </div>
      </header>
    </div>
  );
}

export default App;
