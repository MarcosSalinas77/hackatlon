import Form from 'react-bootstrap/Form';
import './FilterOptions.css'

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
    <Form.Select value={order} onChange={handleOrder} className="filterSelect">
        {options.map((opt, index)=> <option value={opt.value} key={index}>{opt.text}</option>)}
    </Form.Select>
  );
};

export default FilterOptions;
