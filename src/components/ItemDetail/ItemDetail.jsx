import React from "react";

const ItemDetail = ({products}) => {
    return (
      <div className="row shadow p-3 mb-5 bg-body rounded m-3">
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={products[0].img} className="img-fluid rounded-start" alt="..." width="200"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{products[0].name}</h3>
              <h5 className="card-text">{products[0].detail}</h5>
              <h3 className="card-text m-3"><small className="text-muted">Price: ${products[0].price},00</small></h3>
              <button type="button" className="btn btn-outline-primary mt-3 mb-3">Buy me! :)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ItemDetail