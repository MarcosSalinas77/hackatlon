import React, { useEffect, useState } from 'react';
import ListProducts from '../ListProducts/ListProducts';
import { getProducts } from '../../utils/apiConfig';
import FilterOptions from '../FilterOptions/FilterOptions';
import Header from '../Header/Header'

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        (async()=>{
            const res = await getProducts();
            setTimeout(()=> {
                setProducts(res);
                setLoading(false); 
            }, 1000);
            console.log("main");
        })();
    },[]);
    return (
        <main>
            <Header/>
            <section>

                {loading? 
                    <div className='loading'>Cargando...</div>
                : products.length > 0 ? 
                    <>
                        <FilterOptions />
                        <ListProducts products={products} />
                    </>
                : <div>No hay Productos</div>
                }
            </section>
        </main>
    )
}

export default Main