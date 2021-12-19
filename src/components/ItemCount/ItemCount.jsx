import React,{useState} from 'react';
import './itemCount.scss'

const ItemCount = ({ onConfirm, maxQuantity}) => {
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
    </div>
  )
}

export default ItemCount