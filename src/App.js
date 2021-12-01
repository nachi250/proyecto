import logo from './logo.svg';
import './App.css';
import NavBS from './components/NavBS/NavBS'
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <header className="">
        <NavBS/>
      </header>
      <div>
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
