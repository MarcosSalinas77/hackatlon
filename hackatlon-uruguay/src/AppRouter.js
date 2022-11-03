import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home.jsx";
import Error404 from "./views/Error404.jsx";
import Login from "./views/Login.jsx";
import Producto from "./views/Producto.jsx";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
