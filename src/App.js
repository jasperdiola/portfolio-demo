import logo from './logo.svg';
import './App.css';
import Hello from './hello';
import HeaderComponent from './shared/Header/header';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello />
      </header>
    </div>
  );
}

export default App;
