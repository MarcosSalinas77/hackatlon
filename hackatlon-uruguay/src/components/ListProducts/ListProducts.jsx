import React, { useState } from 'react';
import Product from '../Product/Product';
import "./ListProducts.css"

const ListProducts = ({products}) => {
  return (
    <div className='list-products'>
        {products.length === 0? 
            <p>No hay products</p>
        : products.map((prod)=> <Product key={prod.id} product={prod}/>)}
    </div>
  )
}

export default ListProducts