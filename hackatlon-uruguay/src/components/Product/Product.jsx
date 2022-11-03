import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = ({product}) => {
  return (
    <article className='product'>
        <Link to={`/producto/${product.id}`}>
            <div className='product__image'>
                <img src={product.image}/>
            </div>
            <div className='product__title'>
                {product.name}
            </div>
            <div className='product__description'>
                {product.description}
                <div className='product__description-details'>
                    <span>{product.stock}</span>
                    <span>{product.price}</span>
                </div>
            </div>
        </Link>
    </article>
  )
}

export default Product