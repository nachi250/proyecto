import React from "react"
import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom'
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../service/firebase/firebase'

function ItemListContainer() {

    const [products, setProduct] = useState([]);
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getDocs(collection(db, 'items')).then(querySnapshot => {
            console.log(querySnapshot)
            const products = querySnapshot.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            categoryId === undefined ? setProduct(products) :
            setProduct(products.filter((producto) => producto.category === categoryId))
        }).catch((error)=> {
            console.log('Error searching items', error)
        }).finally(() => {
            setLoading(false)
        })

        return () => {
            setProduct([]);
        };
    }, [categoryId]);

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