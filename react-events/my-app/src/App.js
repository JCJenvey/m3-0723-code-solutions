import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton
            color="red"
            text="I"
            onCustomClick={handleCustomClick}
          />
          <CustomButton
            color="green"
            text="know"
            onCustomClick={handleCustomClick}
          />
          <CustomButton
            color="blue"
            text="React!"
            onCustomClick={handleCustomClick}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
