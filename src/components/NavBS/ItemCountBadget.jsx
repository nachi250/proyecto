import React from "react"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemCountBadget = () => {
    const {sumarCantidades} = useContext(CartContext);
    return (
        
        <p className="badge bg-secondary">{sumarCantidades()}</p>
    )
}

export default ItemCountBadget

