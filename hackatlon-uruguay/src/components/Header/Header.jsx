import React from "react";
import menuImage from "./../../assets/menu.svg";
import logoCenco from "./../../assets/logoCenco.png";

import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ changeSearchInput }) => {

  const navegar = useNavigate();
  const salir = () =>{
    localStorage.clear();
    navegar("/login");
  }
  
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  return (
    <header>
      <div className="header-content">
        <div className="header__brand-image-container">
          <img
            src={logoCenco}
            alt="Logo cencosud"
            className="header__hamburguer-menu-img"
          />
        </div>

        <div className="header__image-container">
          <img
            src={menuImage}
            alt="Menú hamburguesa"
            className="header__hamburguer-menu-img"
          />
        </div>

        <div className="header__input-search">
          <input
            type="text"
            onChange={(e) => changeSearchInput(e)}
            placeholder="Buscar productos..."
          />
        </div>

        <nav className="list-items">
          
            
      
            
            <Link to="/login">
              Inciar sesión
            </Link>
            /
            <Link to="/register">
              Registrarse
            </Link>

          
          {/* <Link ><li>Listado de products</li></Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
