import React from "react"
import Item from "./Item"

const products = [
    {
        id: '1',
        name: 'Six foot ocean surfboard',
        description: "These gorgeous ocean surfboards are made from solid pine wood.",
        price: '679',
        img: 'https://images.squarespace-cdn.com/content/v1/5e40959078eb0f389ed0731c/1633714475450-M2P261RJY21DNF2WJB3S/surfboard+6+feet.jpg?format=500w'
    },
    {
        id: '2',
        name: 'Ocean wave surfboard',
        description: "These gorgeous ocean surfboards are made from solid pine wood.",
        price: '275',
        img: 'https://images.squarespace-cdn.com/content/v1/5e40959078eb0f389ed0731c/1634182596512-7L6VUS20FED4PVWTDMCK/IMG_4440-1.jpeg?format=500w'
    },
    {
        id: '3',
        name: 'Ocean Surfboard 2 tall',
        description: "These gorgeous ocean surfboards are made from solid pine wood.",
        price: '149',
        img: 'https://images.squarespace-cdn.com/content/v1/5e40959078eb0f389ed0731c/1633715382323-TTFGXE9RJOXHB1ZGDGVM/IMG_4346-1.jpeg?format=500w'
    }
]

const ItemList = ({products}) => {
    return (
        <div className="row">
            {products.map(product =><Item key={product.id} product={product}/>)}    
        </div>
    )
}

export const getProducts = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}

export default ItemList



