import React from "react"
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
            <ItemList products={products} />
        </div>

    );
}

export default ItemListContainer