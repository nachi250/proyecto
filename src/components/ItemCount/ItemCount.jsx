import React,{useEffect, useState} from 'react';

const ItemCount = ({stock, inicial, onAdd}) => {
    const [count, setCount] = useState(inicial)
    
    useEffect (() => { }, [])
    
    const increase = () => {
      if (count < stock){
        setCount(count+1)
        console.log('Se añadio producto')
        }      
      }

    const decrease = () => {
      if (count > 1){
        setCount(count-1)
        console.log('Se quitó producto')
        }      
      }

    return (
        <div>
            <div className="card mb-2 mt-2">
                <div className="btn-group m-2" role="group" aria-label="First group">
                    <button type="button" className="btn btn-outline-secondary" onClick={increase}>+</button>
                    <button type="button" className=" Disable btn btn-outline-secondary">{count}</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={decrease}>-</button>
                </div>
                <button type="button" className="btn btn-outline-primary m-2" onClick={onAdd}>Add to cart</button>
            </div>
        </div>
    )
  }

export default ItemCount