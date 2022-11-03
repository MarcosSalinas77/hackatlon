import React, { useState } from 'react';
import Product from '../Product/Product';
import "./ListProducts.css"

const ListProducts = ({products}) => {
  console.log(products);
  return (
    <div className='list-products'>
        {products.length === 0? 
            <p>No hay products</p>
        : products.map((prod, index)=> <Product key={index} product={prod}/>)}
    </div>
  )
  // return (
  //   <div className='list-products'>
  //       {products.length === 0? 
  //           <p>No hay products</p>
  //       : products.map((prod, index)=> <p>Hola</p>)}
  //   </div>
  // )
}

export default ListProducts