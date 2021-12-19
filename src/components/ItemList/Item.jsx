import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({product}) {
    return (
        <div className="card m-3 col-lg-3 col-md-12 col-sm-12 shadow p-3 mb-5 bg-body rounded">
            <img src={product.img} alt="" width="150" />
            <h4>{product.name}</h4>
            <h5>Price ${product.price}</h5>
            <p>{product.description}</p>
            <Link to={`/item/${product.id}` }><button type="button" className="btn btn-outline-primary mb-3" style={{ textDecoration: 'none' }}>Desciption</button></Link>
        </div>
    )
}

