import React from "react";
import imagenMuestra from "./../assets/imagen-muestra.jpeg";
import "./Producto.css";
import { useParams } from "react-router-dom";

const Producto = (props) => {
  let productId = useParams().id;
  console.log(productId);

  return (
    <section className="main-product-card">
      <article className="">
        <div className="main-product-title">
          <h2>Título del producto</h2>
        </div>
        <div className="main-product-card__image">
          <img src={imagenMuestra} />
        </div>
        <div className="main-product-card__all-content">
          <div className="main-product-card__info">
            <div className="main-product-title__alternative">
              <h2>Título del producto</h2>
            </div>
            <div className="main-product-card__price">
              <h3>Precio: $596</h3>
              <h3>Tienda: Amazon</h3>
            </div>
            <div className="main-product-card__description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                nobis, facilis ipsam saepe corrupti tempora cum nesciunt quia
                temporibus? Consequatur cupiditate, esse corrupti explicabo,
                nulla vel vitae reprehenderit molestias, corporis aperiam
                commodi maxime nemo asperiores quibusdam harum iusto assumenda
                ab.
              </p>
            </div>
          </div>
          <div className="main-product-card__image-alternative">
            <img src={imagenMuestra} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Producto;
