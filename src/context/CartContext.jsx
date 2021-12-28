import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addQty = () => {
        let subTotal = 0;
        cart.forEach(product=> {
            subTotal += product.quantity
        })
        return subTotal;
    }

    const addItem = (product, quantity) => {

        const flag = isInCart(product);
        if (flag) {
            let repeatedItem = cart.find (element => element.item === product);
            repeatedItem.quantity += quantity;
            let repeatedCart = cart.filter (element => element.item !== product);
            setCart([...repeatedCart, repeatedItem]);
        } else {
            setCart([...cart, {item: product, quantity: quantity}]);
        }
        addQty()
    }

    const isInCart = (item) => {
        //console.log(item);
        return cart.some(product => product.item === item );
    }

    const removeItem = (e) => {        
        let btnClicked= e.target
        let id = btnClicked.getAttribute('id')
        let newCart = cart.filter (element => element.item.id !== id);
        setCart([...newCart])
    }

    const cleanCart = () => {
        setCart([]);
    }

    const total = () => {
        let total = 0;
        cart.forEach(product=> {
            total += parseInt(product.item.price*product.quantity)
        })
        return total
    }

    return(
        <CartContext.Provider value = {{cart, addItem, addQty, cleanCart, removeItem, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;