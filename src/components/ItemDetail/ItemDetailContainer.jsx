import React from "react";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../../service/getProducts";
import { useEffect, useState } from "react";



function ItemDetailCointainer() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const list = getProducts();
        list.then(list => {
            setProduct(list[0]);
        });
        return () => {
            setProduct([]);
        };
    }, []);


    return (
        <div className="ItemDetailontainer container">
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailCointainer
