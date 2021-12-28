import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import { addDoc, collection, getDoc, getFirestore, writeBatch } from 'firebase/firestore'


const CheckOut = () => {
    const {cart, cleanCart, total} = useContext (CartContext);
    const [form, setForm] = useState({name: "", mail: "", phone:""});
    const [orderId, setOrderId] = useState()

    const date = new Date()


    const getForm = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    
    const dispatchPurchase = () => {

        const newOrder = {
            buyer: {name: form.name, phone: form.phone, mail: form.mail},
            items: cart,
            date: date,
            total: '$ '+total()+'.00',
        };
        //console.log(newOrder)

        const db = getFirestore();
        const batch = writeBatch(db)

        addDoc(collection(db, 'orders'), newOrder).then((doc) => {
                    batch.commit().then(() => {
                        console.log(`order successfully generated: ${doc.id}`)
                    });
                }).catch((error) => {
                    console.error(error);
                }).finally(() => {
                    setTimeout(() => {
                        cleanCart();
                    }, 1000);
                });


        // const updateStock = () =>{ }

}

    return(
        <div className="row d-flex justify-content-evenly">
            <form method="POST" className="m-3 col-lg-5 col-md-8 col-sm-8 col-xs-8 card m-3 shadow p-3 mb-5 bg-body rounded">
                <div class="mb-3">
                    <input type="text" className="form-control" onChange={getForm} type="text" name="name" placeholder="name"/>
                </div>
                <div class="mb-3">
                    <input type="text" className="form-control" onChange={getForm} type="text" name="phone"placeholder="phone"/>    
                </div>
                <div class="mb-3">
                    <input type="email" className="form-control" onChange={getForm} type="text" name="mail" placeholder="mail"/>
                </div>
                <p className="btn btn-primary m-3" onClick={dispatchPurchase}>Order</p>
            </form>

            <div className="m-3 col-lg-5 col-md-8 col-sm-8 col-xs-8 card m-3 shadow p-3 mb-5 bg-body rounded">
                <div className='row mb-3'>  
                            <div className="col"><h5>Your order</h5></div>
                </div>
            {cart.map(producto => { 
                        return <div className='m-3 row'>
                                    <div className="col-6 m-auto">{producto.item.name} </div>
                                    <div className="col-6 m-auto">{producto.quantity}</div>
                                </div>})}
                <div className='row m-3'>  
                    <div className="col mt-3"><h6>Total</h6></div>
                    <div className="col mt-3"><h6>$ {total()},00</h6></div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut