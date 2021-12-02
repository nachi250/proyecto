import React from "react";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../../service/getProducts";
import { useEffect, useState } from "react";



function ItemDetailCointainer() {
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
        <div className="ItemDetailontainer container">
            <ItemDetail products={products} />
        </div>
    );
}

export default ItemDetailCointainer
