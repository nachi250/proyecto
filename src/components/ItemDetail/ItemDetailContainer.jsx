import React from "react";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../../service/getProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ItemDetailCointainer() {
    
    const [product, setProduct] = useState([]);
    const {objId} = useParams();
    console.log(objId)
    useEffect(() => {
        getProductById(objId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })

        return () => {
            setProduct([]);
        };
    }, [objId]);


    return (
        <div className="ItemDetailontainer container">
            <ItemDetail product={product}/>
        </div>
    );
}

export default ItemDetailCointainer
