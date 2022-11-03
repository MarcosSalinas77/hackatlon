import React, { useEffect, useState } from "react";
import imagenMuestra from "./../assets/imagen-muestra.jpeg";
import "./Producto.css";
import { useParams } from "react-router-dom";
import { getProductId } from "../utils/apiConfig";
import Header from "../components/Header/Header";

const Producto = (props) => {
  let productId = useParams().id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(productId);

  useEffect(() => {
    (async () => {
      try {
        const res = await getProductId(productId);
        setProduct(res);
        setLoading(false);
      } catch (err) {
        setProduct(null);
        setLoading(false);
        console.log(err);
      }
    })();
  }, []);
  console.log(product);
  return (
    <>
      <Header />
      {loading ? (
        <div>Cargando Producto...</div>
      ) : product != null?(
        <section className="main-product-card">
          <article className="">
            <div className="main-product-title">
              <h2>{product.title}</h2>
            </div>
            <div className="main-product-card__image">
              <img src={product.image} />
            </div>
            <div className="main-product-card__all-content">
              <div className="main-product-card__info">
                <div className="main-product-title__alternative">
                  <h2>{product.title}</h2>
                </div>
                <div className="main-product-card__price">
                  <h3>Precio: ${product.price}</h3>
                  <h3>Tienda: Amazon</h3>
                </div>
                <div className="main-product-card__description">
                  <p>
                    {product.description}
                  </p>
                </div>
              </div>
              <div className="main-product-card__image-alternative">
                <img src={product.image} />
              </div>
            </div>
          </article>
        </section>
      ): <div className="main-product-card" style={{border:"none"}}>No existe el producto</div>}
    </>
  );
};

export default Producto;
