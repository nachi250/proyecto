import logo from './logo.svg';
import './App.css';
import NavBS from './components/NavBS/NavBS'
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailCointainer from './components/ItemDetail/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="">
        <NavBS/>
      </header>
      <div>
        <ItemListContainer greeting="Ocean's Tables"/>
      </div>
      <div>
        <ItemDetailCointainer/>
      </div>
    </div>
  );
}

export default App;
