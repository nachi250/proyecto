import React from "react"
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={5} inicial={1} onAdd={() => console.log('Add to Cart')}/>
        </div>

    )
}

export default ItemListContainer