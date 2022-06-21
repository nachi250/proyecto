import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import { 
    addDoc, 
    collection, 
    getDoc, 
    doc,
    writeBatch } 
    from 'firebase/firestore'
import { db } from '../../service/firebase/firebase'


const CheckOut = () => {
    const {cart, cleanCart, total} = useContext (CartContext);
    const [form, setForm] = useState({name: "", mail: "", phone:""});

    const getForm = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const date = new Date()

    const dispatchPurchase = () => {

        const newOrder = {
            buyer: {name: form.name, phone: form.phone, mail: form.mail},
            items: cart,
            date: date,
            total: '$ '+total()+'.00',
        };


        const batch = writeBatch(db);
        const outOfStock = [];

        newOrder.items.forEach((prod) => {
            getDoc(doc(db, 'items', prod.item.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= prod.quantity){
                    batch.update(doc(db, 'items', documentSnapshot.id),{
                        stock: documentSnapshot.data().stock - prod.quantity
                    })

                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                }
             })
        })

        if (outOfStock.length === 0) {
            
            addDoc(collection(db, 'orders'), newOrder).then(({id}) =>{
                batch.commit().then(() => {
                    console.log('¡Success! Order ID: ', id)
                    setTimeout(() => {
                        cleanCart()
                    }, 2000);
                })
            }).catch((error) =>{
                console.log('fail ',error)
            })
        }

}

    return(
        <div className="row d-flex justify-content-evenly">
            <form method="POST" className="m-3 col-lg-5 col-md-8 col-sm-8 col-xs-8 card m-3 shadow p-3 mb-5 bg-body rounded">
                <div className="mb-3">
                    <input type="text" className="form-control" onChange={getForm} name="name" placeholder="name"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" onChange={getForm} name="phone"placeholder="phone"/>    
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" onChange={getForm} name="mail" placeholder="mail"/>
                </div>
                <p className="btn btn-primary m-3" onClick={dispatchPurchase}>Order</p>
            </form>

            <div className="m-3 col-lg-5 col-md-8 col-sm-8 col-xs-8 card m-3 shadow p-3 mb-5 bg-body rounded">
                <div className='row mb-3'>  
                    <div className="col"><h5>Your order</h5></div>
                </div>
                {cart.map(producto => { 
                    return <div key={producto.item.id} className='m-3 row'>
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