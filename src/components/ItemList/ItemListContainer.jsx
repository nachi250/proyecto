import React from "react"
import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from "../../service/getProducts";
import { getProducts } from '../../service/getProducts'
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../service/firebase/firebase'

function ItemListContainer() {

    const [products, setProduct] = useState([]);
    const {objCategory} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getDocs(collection(db, 'items')).then(querySnapshot => {
            console.log(querySnapshot)
            const products = querySnapshot.docs.map(doc =>{
                console.log(doc)
                return {id: doc.id, ...doc.data()}
            })
            setProduct(products)
        }).catch((error)=> {
            console.log('Error searching items', error)
        }).finally(() => {
            setLoading(false)
        })

        return () => {
            setProduct([]);
        };
    }, [objCategory]);

    if (loading) {
        return <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
    }

    return (
        <div className="ItemListContainer container">
            <ItemList products={products} />
        </div>

    );
}

export default ItemListContainer