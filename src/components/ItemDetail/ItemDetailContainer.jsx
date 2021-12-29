import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/firebase'



function ItemDetailCointainer() {
    
    const [product, setProduct] = useState([]);
    const [ loading, setLoading] = useState(true)
    const {objId} = useParams();

    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'items', objId)).then((querySnapshot) => {
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(product)
        }).catch((error) => {
            console.log('error searchin item', error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct();
        });
    }, [objId]);

    if (loading) {
        return  <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
    }

    return (
        <div className="ItemDetailontainer container">
            <ItemDetail product={product}/>
        </div>
    );
}

export default ItemDetailCointainer
