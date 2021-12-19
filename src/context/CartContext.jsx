import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addQty = () => {
        let subTotal = 0;
        cart.forEach(product=> {
            console.log(product);
            subTotal += product.quantity
        })
        return subTotal;
    }

    const addItem = (product, quantity) => {

        const flag = isInCart(product);
        console.log(flag);
        if (flag) {
            let repeatedItem = cart.find (element => element.item === product);
            repeatedItem.quantity += quantity;
            let repeatedCart = cart.filter (element => element.item !== product);
            setCart([...repeatedCart, repeatedItem]);
        } else {
            setCart([...cart, {item: product, quantity: quantity}]);
        }
        console.log('funcion sumar cantidades consologueada '+addQty())
        addQty()
    }

    const isInCart = (item) => {
        console.log(item);
        return cart.some(product => product.item === item );
    }

    const removeItem = (item) => {

    }

    const cleanCart = () => {
        setCart([]);
    }


    return(
        <CartContext.Provider value = {{cart, addItem, addQty, cleanCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;