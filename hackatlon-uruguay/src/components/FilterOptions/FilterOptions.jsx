import React from "react";

const FilterOptions = () => {
  const options = [
    { value: "", text: "Sin filtro", name: "Sin Filtro"},
    { value: "menorPrecio", text: "Menor precio", name: "Menor precio" },
  ];
  return (
    <select>
      <option>Sin Filtro</option>
      <option>Menor Precio</option>
    </select>
  );
};

export default FilterOptions;
