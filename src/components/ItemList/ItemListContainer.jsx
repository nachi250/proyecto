import React from "react"
import ItemCount from '../ItemCount/ItemCount';
import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import { getProducts } from "../../service/getProducts";

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const list = getProducts();
        list.then(list => {
            setProducts(list);
        });
        return () => {
            setProducts([]);
        };
    }, []);

    return (
        <div className="ItemListContainer container">
            <h1>{greeting}</h1>
            {/*<ItemCount stock={5} inicial={1} onAdd={() => console.log('Add to Cart')}/>*/}
            <ItemList products={products} />
        </div>

    );
}

export default ItemListContainer