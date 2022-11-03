import React, { useEffect, useState } from 'react';
import ListProducts from '../ListProducts/ListProducts';

const allProducts = [
    {
        name: "Bicicleta BMX",
        description: "Bicicleta cara",
        price: 280,
        stock: 300,
        image: "https://cdn.shopify.com/s/files/1/0200/1122/1092/products/09767b72-539a-46a1-9362-928a2ea0f8d5_1080x.jpg?v=1652193924",
        id: 1
    },
    {
        name: "Bicicleta BMX",
        description: "Bicicleta cara",
        price: 280,
        stock: 300,
        image: "https://cdn.shopify.com/s/files/1/0200/1122/1092/products/09767b72-539a-46a1-9362-928a2ea0f8d5_1080x.jpg?v=1652193924",
        id: 2
    },
    {
        name: "Bicicleta BMX",
        description: "Bicicleta cara",
        price: 280,
        stock: 300,
        image: "https://cdn.shopify.com/s/files/1/0200/1122/1092/products/09767b72-539a-46a1-9362-928a2ea0f8d5_1080x.jpg?v=1652193924",
        id: 3
    },
    {
        name: "Bicicleta BMX",
        description: "Bicicleta cara",
        price: 280,
        stock: 300,
        image: "https://cdn.shopify.com/s/files/1/0200/1122/1092/products/09767b72-539a-46a1-9362-928a2ea0f8d5_1080x.jpg?v=1652193924",
        id: 4
    },
    
]

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        (async()=>{
            setTimeout(()=> {
                setProducts(allProducts);
                setLoading(false); 
            }, 1000);
            console.log("main");
        })();
    },[]);
    return (
        <main>
            <section>

                {loading? 
                    <div className='loading'>Cargando...</div>
                : products.length > 0 ? 
                    <ListProducts products={products} />
                : <div>No hay Productos</div>
                }
            </section>
        </main>
    )
}

export default Main