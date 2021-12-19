import './App.css';
import NavBS from './components/NavBS/NavBS'
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailCointainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import CartList from './components/CartList/CartList';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBS/>
            <Switch>
              <Route exact path="/">
                <ItemListContainer/>
              </Route>
              <Route exact path="/category/:objCategory">
                <ItemListContainer/>
              </Route>
              <Route exact path="/item/:objId">
                <ItemDetailCointainer/>
              </Route>
              <Route exact path="/cart">
                <CartList/>
              </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
