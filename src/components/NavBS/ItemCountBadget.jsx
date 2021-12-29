import React from "react"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemCountBadget = () => {
    const {addQty} = useContext(CartContext);
    return (
        
        <span className="badge bg-secondary">{addQty()}</span>
    )
}

export default ItemCountBadget

