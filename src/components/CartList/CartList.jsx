import './styles.scss'
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartList = () => {
    const {cart, cleanCart, removeItem, total} = useContext (CartContext);

    return (
        
        <div className="card shadow p-3 m-auto mb-5 bg-body rounded" style={{width: "80%"}}>
            {cart.length > 0 ?

            <div className="card-body container">

                    <div className='row mb-3 cart-detail-display-none'>  
                        <div className="col-3"><p className='h5'>Image</p></div>
                        <div className="col-3"><p className='h5'>Name</p></div>
                        <div className="col-3"><p className='h5'>Price</p></div>
                        <div className="col-3"><p className='h5'>Quantity</p></div>
                    </div>

                    {cart.map(producto => {
                        return <div className='row m-1 cart-detail-display-none'>
                                    <div className="col-3 m-auto"><img src={producto.item.img} alt="..." width={70} /></div>
                                    <div className="col-3 m-auto">{producto.item.name} </div>
                                    <div className="col-3 m-auto">${producto.item.price},00</div>
                                    <div className="col-2 m-auto">{producto.quantity}</div>
                                    <div className="col-1 m-auto"><button type="button" className="btn-close" id={producto.item.id} onClick={removeItem}></button></div>
                                </div>})}

                    <div className='row m-3'>  
                        <div className="col mt-3"><h6>Total</h6></div>
                        <div className="col mt-3"><h6>$ {total()},00</h6></div>
                        <div className="col mt-3 cart-detail-display-none"></div>
                        <div className="col mt-3 cart-detail-display-none"></div>
                    </div>
            
                    <div className='row m-3 d-flex justify-content-center'>
                        <Link to="/checkout"><button type="button" className=" col-3 btn btn-outline-info m-3" style={{width: "auto"}}>Set order</button></Link>
                        <button type="button" className=" col-3 btn btn-outline-danger m-3" onClick={cleanCart} style={{width: "auto"}}>Clean cart</button>
                    </div>
            </div>
            :

            <div className="card" aria-hidden="true" style={{width: "60%", border: "none"}}>
                <img src="https://letrasrecortadas.com/carritoVacio.png" alt="..." width="150"/>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      Parece que no hay productos para mostrar!
                    </h5>
                    <Link to="/"><button type="button" className=" col-3 btn btn-outline-info m-3" style={{width: "auto"}}>Shop</button></Link>
                </div>
            </div>
        }


        </div>
    )
}

export default CartList