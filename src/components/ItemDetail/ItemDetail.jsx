import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({product}) => {
    return (
      <div className="row shadow p-3 mb-5 bg-body rounded m-3">
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.img} className="img-fluid rounded-start" alt="..." width="200"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <h5 className="card-text">{product.detail}</h5>
              <h3 className="card-text m-3"><small className="text-muted">Price: ${product.price},00</small></h3>
              <ItemCount stock={5} inicial={1} onAdd={() => console.log('Add to Cart')}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ItemDetail