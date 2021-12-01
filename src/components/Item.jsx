import React from 'react'

export default function Item({product}) {
    return (
        <div className="card m-3 col-lg-3 col-md-4 col-sm-12">
                <img src={product.thumbnail} alt="" width="100" />
                <h6>{product.title}</h6>
                <h7>Price ${product.price}</h7>
                <p>{product.description}</p>
                <button type="button" className="btn btn-outline-primary mb-3">Desciption</button>
            </div>

    )
}

