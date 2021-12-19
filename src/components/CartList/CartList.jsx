import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartList = () => {
    const {cart, cleanCart, removeItem} = useContext (CartContext);

    return (
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: "60%"}}>
            <div className="card-body container">

                    <div className='row mb-3'>  
                        <div className="col"><h4>Image</h4></div>
                        <div className="col"><h4>Name</h4></div>
                        <div className="col"><h4>Quantity</h4></div>
                    </div>

                    {cart.map(producto => {
                        return <div className='row m-1'>
                                    <div className="col-4 m-auto"> <img src={producto.item.img} alt="..." width={70} /></div>
                                    <div className="col-4 m-auto"> {producto.item.name} </div>
                                    <div className="col-3 m-auto"> {producto.quantity}</div>
                                    <div className="col-1 m-auto"><button type="button" className="btn btn-outline-danger">X</button></div>
                                </div>})}
            </div>
                    <div className='row m-3 d-flex justify-content-center'>
                        <button type="button" className=" col-3 btn btn-outline-info m-3">Payment Options</button>
                        <button type="button" className=" col-3 btn btn-outline-danger m-3" onClick={cleanCart}>Clean Cart</button>
                    </div>

        </div>
    )
}

export default CartList