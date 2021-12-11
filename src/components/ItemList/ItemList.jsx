import React from "react"
import Item from "./Item"


const ItemList = ({products}) => {
    console.log(products)
    return (
        <div className="row">
            {products.map(product =><Item key={product.category} product={product}/>)}    
        </div>
    )
}


export default ItemList



