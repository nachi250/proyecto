

const products = [
    {
        id: '1',
        name: 'Six foot ocean surfboard',
        category: 'boards',
        description: 'These gorgeous ocean surfboards are made from solid pine wood.',
        price: '679',
        stock: 5,
        img: 'https://images.squarespace-cdn.com/content/v1/5e40959078eb0f389ed0731c/1633714475450-M2P261RJY21DNF2WJB3S/surfboard+6+feet.jpg?format=500w',
        detail: 'This beautiful 6 foot surfboard is made out of solid wood. It measures 6’ tall and 17” wide. It includes 3 epoxy resin waves and comes ready to hang.'
    },

    {
        id: '2',
        name: 'Ocean waves side tables',
        category: 'furniture',
        description: 'Set of 2 live edge side tables with ocean waves',
        price: '450',
        stock: 5,
        img: 'https://images.squarespace-cdn.com/content/v1/5e40959078eb0f389ed0731c/1611617170280-5P1MAEIPXIMENY5DJWPC/IMG_1125-1.jpeg?format=500w',
        detail: 'These side table sets are made with solid 2” thick live edge pieces of walnut.  They’re heavy duty and include epoxy resin waves.'
    },

    {
        id: '3',
        name: 'Surfboard bottle opener',
        category: 'accesories',
        description: 'Shark head surfboard bottle opener with ocean waves',
        price: '75',
        stock: 5,
        img: 'https://images.squarespace-cdn.com/content/v1/5e40959078eb0f389ed0731c/1632415191162-Y5QITSOV6GQJTUAKR3XR/IMG_4152.jpeg?format=500w',
        detail: 'This bottle opener is made from solid wood and includes a cast iron shark head bottle opener. The surfboard includes 2 epoxy resin waves and comes ready to hang.'
    }
]

export const getProducts = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {resolve(products)}, 1000)
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const getProductsByCategory = (category) => {  
    return new Promise ((resolve, reject) => {
        const product = products.filter(prod => prod.category === category)
        setTimeout(() => {resolve(product)}, 1000)
    })
}


