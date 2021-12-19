import React from "react"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemCountBadget = () => {
    const {addQty} = useContext(CartContext);
    return (
        
        <p className="badge bg-secondary">{addQty()}</p>
    )
}

export default ItemCountBadget

