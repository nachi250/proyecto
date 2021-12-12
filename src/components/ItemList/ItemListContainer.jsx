import React from "react"
import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from "../../service/getProducts";
import { getProducts } from '../../service/getProducts'

function ItemListContainer() {

    const [products, setProduct] = useState([]);
    const {objCategory} = useParams();
    console.log(objCategory)

    useEffect(() => {
        if(objCategory){
            getProductsByCategory(objCategory).then(item => {
                setProduct(item)
            }).catch(err  => {
                console.log(err)
            })

        }else {
            getProducts().then(item => {
                setProduct(item)
            }).catch(err  => {
                console.log(err)
            })
        }

        return () => {
            setProduct([]);
        };
    }, [objCategory]);

    return (
        <div className="ItemListContainer container">
            <ItemList products={products} />
        </div>

    );
}

export default ItemListContainer