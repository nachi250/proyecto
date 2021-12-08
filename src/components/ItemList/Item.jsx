import React from 'react'

export default function Item({product}) {
    return (
        <div className="card m-3 col-lg col-md col-sm-12 shadow p-3 mb-5 bg-body rounded">
            <img src={product.img} alt="" width="150" />
            <h4>{product.name}</h4>
            <h5>Price ${product.price},00</h5>
            <p>{product.description}</p>
            <button type="button" className="btn btn-outline-primary mb-3">Desciption</button>
        </div>
    )
}

