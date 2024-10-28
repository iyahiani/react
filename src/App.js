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
const Logo = ({img}) => <img src={img} className="App-logo" alt="logo" />
function App() {
  const name="React"
  return (
    <div className="App">
      <header className="App-header">
        <Logo img={logo}></Logo>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink></AppLink>
      </header>
    </div>
  );
}

export default App;
