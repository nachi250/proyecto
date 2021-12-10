import logo from './logo.svg';
import './App.css';
import NavBS from './components/NavBS/NavBS'
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailCointainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBS/>
          <Switch>
            <Route exact path="/list/:objCategory">
              <ItemListContainer/>
            </Route>
            <Route path="/detail/:objId">
              <ItemDetailCointainer/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
