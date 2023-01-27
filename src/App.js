import logo from './logo.svg';
import './App.css';

function App() {
  let isMorning = (new Date()).getHours()<12;
  let greetingElement = isMorning
    ? <h3>Good Morning!</h3>
    : <h3>Good Evening!</h3>
  return (
    <div className="App">
      <header className="App-header">
        {greetingElement}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is cool!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
