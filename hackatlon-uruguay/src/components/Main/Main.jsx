import React, { useEffect, useRef, useState } from "react";
import ListProducts from "../ListProducts/ListProducts";
import { getProducts, getProductsFilter } from "../../utils/apiConfig";
import FilterOptions from "../FilterOptions/FilterOptions";
import Header from "../Header/Header";
import "./Main.css";
import Loading from "../Loading/Loading";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("");
  const [query, setQuery] = useState("");

  const inputRef = useRef();
  useEffect(() => {
    (async () => {
      const res = await getProducts();
      setProducts(res);
      setLoading(false);
    })();
  }, []);
  console.log(products);

  useEffect(() => {
    if (order === "menorPrecio") {
      let productosOrder = [...products];
      productosOrder.sort((prod1, prod2) => prod1.precio - prod2.precio);
      setProducts(productosOrder);
    } else if (order === "mayorPrecio") {
      let productosOrder = [...products];
      productosOrder.sort((prod1, prod2) => prod2.precio - prod1.precio);
      setProducts(productosOrder);
    }
  }, [order]);

  function getProductsFilter(filter) {
    console.log(products);
    let stringSearch = filter;
    let productosFiltrados = [...products].filter((prod) => {
      return prod.nombreProd.includes(stringSearch);
    });
    return productosFiltrados
  }
  useEffect(() => {
    const res = getProductsFilter(query);
    setProducts(res);
  }, [query]);

  const changeSearchInput = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <main>
      <Header changeSearchInput={changeSearchInput} />
      <section className="section-products">
        {loading ? (
          <Loading />
        ) : //<div className='loading'>Cargando...</div>
        products.length > 0 ? (
          <>
            <FilterOptions order={order} setOrder={setOrder} />
            <ListProducts products={products} />
          </>
        ) : (
          <div>No hay Productos</div>
        )}
      </section>
    </main>
  );
};

export default Main;
