import React from "react"
import Item from "./Item"

const ItemList = ({products}) => {
    return (
        <div className="row d-flex justify-content-evenly">
            {products.map(product =><Item key={product.id} product={product}/>)}    
        </div>
    )
}

export default ItemList



