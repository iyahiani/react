import logo from './logo.svg';
import './App.css';


const AppLink = () => {
  const name="React" ;
  return (
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
      >
        Learn {name}
      </a>
  )
}
function App() {
  const name="React"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink></AppLink>
      </header>
    </div>
  );
}

export default App;
