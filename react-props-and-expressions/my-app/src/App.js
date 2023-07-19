import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          <CustomButton color="red" text="I" />
          <CustomButton color="green" text="know" />
          <CustomButton color="blue" text="React!" />
        </a>
      </header>
    </div>
  );
}

export default App;
