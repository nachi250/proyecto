import React from 'react'

export default function Item({product}) {
    return (
        <div className="card m-3 col-lg col-md col-sm-12">
                <img src={product.img} alt="" width="150" />
                <h4>{product.name}</h4>
                <h5>Price ${product.price}</h5>
                <h8>{product.description}</h8>
                <button type="button" className="btn btn-outline-primary mb-3">Desciption</button>
            </div>

    )
}

