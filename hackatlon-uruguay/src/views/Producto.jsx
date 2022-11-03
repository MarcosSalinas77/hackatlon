import React from "react";
import imagenMuestra from "./../assets/imagen-muestra.jpeg";

const Producto = () => {
  return (
    <section className="main-product-card">
      <article className="">
        <h2>Título del producto</h2>
        <div className="main-product-card__image">
          <img src={imagenMuestra} />
        </div>
        <div className="main-product-card__price">
          <h3>Precio: $596</h3>
          <h3>Tienda: Amazon</h3>
        </div>
        <div className="main-product-card__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis,
            facilis ipsam saepe corrupti tempora cum nesciunt quia temporibus?
            Consequatur cupiditate, esse corrupti explicabo, nulla vel vitae
            reprehenderit molestias, corporis aperiam commodi maxime nemo
            asperiores quibusdam harum iusto assumenda ab.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Producto;
