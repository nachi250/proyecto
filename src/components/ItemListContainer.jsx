import React from "react"
import ItemCount from './ItemCount';
import { getProducts } from "./ItemList";
import ItemList from "./ItemList";
import Item from "./Item";
import { useEffect,useState
 } from "react/cjs/react.development";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState("")

    /*useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
        .then(response => {
            return response.json()
        }).then( res => {
            setProducts(res.results.slice(0,15))
        })
    }, [])
    console.log(products)*/

    const handleClick = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response => {
            return response.json()
        }).then( res => {
            setProducts(res.results.slice(0,15))
        })
    }

    return (
        <div className="ItemListContainer container">
            <div className="input-group m-3">
            <input className="form-control" type="text" onChange={(evt) => setInput(evt.target.value)}/>
            <button className="btn btn-outline-primary" onClick={handleClick}>Search</button>
            </div> 
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer