import logo from './logo.svg';
import './App.css';
import NavBS from './components/NavBS/NavBS'
import ItemListContainer from './components/NavBS/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBS/>
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
      <div>
        <ItemListContainer greeting='¡Bienvenido al Sitio!'/>
      </div>
    </div>
  );
}

export default App;
