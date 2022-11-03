import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = ({product}) => {
  return (
    <article className='article-product'>
        <Link className='product' to={`/producto/${product.id}`}>
            <div className='product__image'>
                <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"/>
            </div>
            <div className='product__title'>

                {product.nombreProd}

            </div>
            <div className='product__description'>
                {product.nombreTienda}
                <div className='product__description-details'>
                    <span>Precio:</span>
                    <span>{product.precio} $</span>
                </div>
            </div>
        </Link>
    </article>
  )
}

export default Product