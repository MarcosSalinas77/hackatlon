import React, { useEffect, useRef, useState } from 'react';
import ListProducts from '../ListProducts/ListProducts';
import { getProducts, getProductsFilter } from '../../utils/apiConfig';
import FilterOptions from '../FilterOptions/FilterOptions';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState("");
    const [query, setQuery] = useState("");

    const inputRef = useRef();
    useEffect(()=>{
        (async()=>{
            const res = await getProducts();
            setTimeout(()=> {
                setProducts(res);
                setLoading(false); 
            }, 1000);
        })();
    },[]);


    useEffect(()=>{
        if(order === "menorPrecio"){
            let productosOrder = [...products];
            productosOrder.sort((prod1, prod2)=> prod1.price-prod2.price);
            setProducts(productosOrder);
        }else if(order === "mayorPrecio"){
            let productosOrder = [...products];
            productosOrder.sort((prod1, prod2)=> prod2.price-prod1.price);
            setProducts(productosOrder);
        }
    },[order]);

    useEffect(()=>{
        (async()=>{
            const res = await getProductsFilter(query);
            setProducts(res)
        })();
    },[query]);

    const cambio = ({target}) => {
        setQuery(target.value)
    }


    return (
        <main>
            <section>

                {loading? 
                    <div className='loading'>Cargando...</div>
                : products.length > 0 ? 
                    <>
                        <FilterOptions order={order} setOrder={setOrder}/>
                        <ListProducts products={products} />
                        <input onChange={(e)=> cambio(e)} ref={inputRef} type="text" />
                        <button>Click para filtrar</button>
                    </>
                : <div>No hay Productos</div>
                }
            </section>
        </main>
    )
}

export default Main