import React from "react"
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount/>
        </div>

    )
}

export default ItemListContainer