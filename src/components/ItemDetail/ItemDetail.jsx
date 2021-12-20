import React from "react";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.scss'
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

{/*const InputCount = ({onConfirm, maxQuantity}) =>{
  const [count, setCount] = useState(1)

  const handleChange = ({target}) => {
    if(target.value <= maxQuantity && target.value > 0) {
      setCount(target.value)
    }
  }

  return (
    <div>
      <input type='number' onChange={handleChange} value={count}/>
      <button onCLick={() => onConfirm(count)}>Add to cart</button>
    </div>
  )
}

const ButtonCount = ({ onConfirm, maxQuantity}) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    if (count < maxQuantity) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <div className="mb-2 mt-2">
          <div className="btn-group m-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-outline-secondary" onClick={increment}>+</button>
              <button type="button" className="Disable btn border-secondary">{count}</button>
              <button type="button" className="btn btn-outline-secondary" onClick={decrement}>-</button>
          </div>
          <button type="button" className="btn btn-outline-primary m-2" onClick={() => onConfirm(count)}>Add to cart</button>
      </div>
      <Link to='/cart'><button type="button" className="btn btn-outline-warning m-2">Purchase</button></Link>
    </div>
  )
}*/}

const ItemDetail = ({product}) => {
  
  const {addItem} = useContext(CartContext)

  const [buy, setBuy] = useState(false);
  const [qty, setQty] = useState(0);

  const addToCart = (qty) => {
      setBuy(true);
      setQty(qty);
  }

  const handlePurchase = () => {
      addItem(product, qty);

  }

  //const Count = inputType === 'input' ? InputCount : ButtonCount
    return (
      <div className="row shadow p-3 mb-5 bg-body rounded m-3">
        <div className="card col mb-3">
        <div className="row g-0">
          <div className="col-md-4 mt-3">
            <img src={product.img} className="img-fluid rounded-start" alt="..." width="200"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <h5 className="card-text">{product.detail}</h5>
              <h3 className="card-text m-3"><small className="text-muted">Price: ${product.price},00</small></h3>
              
              {!buy ?
                <ItemCount maxQuantity={product.stock} onConfirm = {(qty) => addToCart (qty)} />
                :
                <Link to= "/cart"><button type="button" className="btn btn-outline-warning m-2" onClick = {handlePurchase}>Purchase</button></Link>
                }

            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ItemDetail