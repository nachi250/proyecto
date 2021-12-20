import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartList = () => {
    const {cart, cleanCart, removeItem, total} = useContext (CartContext);

    return (
        
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: "60%"}}>
            {cart.length > 0 ?

            <div className="card-body container">

                    <div className='row mb-3'>  
                        <div className="col"><h5>Image</h5></div>
                        <div className="col"><h5>Name</h5></div>
                        <div className="col"><h5>Price</h5></div>
                        <div className="col"><h5>Quantity</h5></div>
                    </div>

                    {cart.map(producto => {
                        return <div className='row m-1'>
                                    <div className="col-3 m-auto"><img src={producto.item.img} alt="..." width={70} /></div>
                                    <div className="col-3 m-auto">{producto.item.name} </div>
                                    <div className="col-3 m-auto">${producto.item.price},00</div>
                                    <div className="col-2 m-auto">{producto.quantity}</div>
                                    <div className="col-1 m-auto"><button type="button" className="btn btn-outline-danger" onClick={removeItem(producto.item.id)}>X</button></div>
                                </div>})}

                    <div className='row m-3'>  
                        <div className="col mt-3"><h6>Total</h6></div>
                        <div className="col mt-3"><h6>$ {total()},00</h6></div>
                        <div className="col mt-3"><h6></h6></div>
                        <div className="col mt-3"><h6></h6></div>
                    </div>
            
                    <div className='row m-3 d-flex justify-content-center'>
                        <button type="button" className=" col-3 btn btn-outline-info m-3">Payment Options</button>
                        <button type="button" className=" col-3 btn btn-outline-danger m-3" onClick={cleanCart}>Clean Cart</button>
                    </div>
            </div>
            :

            <div className="card" aria-hidden="true" style={{width: "60%", border: "none"}}>
                <img src="https://letrasrecortadas.com/carritoVacio.png" alt="..." width="150"/>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      Parece que no hay productos para mostrar!
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                    <Link to="/"><button type="button" className=" col-3 btn btn-outline-info m-3">Go buy</button></Link>
                </div>
            </div>
        }


        </div>
    )
}

export default CartList