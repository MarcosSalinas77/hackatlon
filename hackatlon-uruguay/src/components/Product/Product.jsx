import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = ({product}) => {
  return (
    <article className='article-product'>
        <Link className='product' to={`/producto/${product.id}`}>
            <div className='product__image'>
                <img src={product.image}/>
            </div>
            <div className='product__title'>
                Ir a inicio - {product.title}
            </div>
            <div className='product__description'>
                {product.description.length > 50? `${product.description.substring(0,50)}...`: `${product.description}`}
                <div className='product__description-details'>
                    <span>Precio:</span>
                    <span>{product.price} $</span>
                </div>
            </div>
        </Link>
    </article>
  )
}

export default Product