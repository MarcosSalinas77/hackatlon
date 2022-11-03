import React from "react";

const FilterOptions = ({order, setOrder}) => {
  const options = [
    { value: "", text: "Sin filtro", name: "Sin Filtro"},
    { value: "menorPrecio", text: "Menor precio", name: "Menor precio" },
    { value: "mayorPrecio", text: "Mayor precio", name: "Mayor precio" },
  ];
  const handleOrder = ({target}) => {
    setOrder(target.value);
  }
  return (
    <select value={order} onChange={handleOrder}>
      {options.map((opt, index)=> <option value={opt.value} key={index}>{opt.text}</option>)}
    </select>
  );
};

export default FilterOptions;
