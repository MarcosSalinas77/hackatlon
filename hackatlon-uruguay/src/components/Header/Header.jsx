import React from "react";
import menuImage from "./../../assets/menu.svg";
import logoCenco from "./../../assets/logoCenco.png";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ changeSearchInput }) => {
  return (
    <header>
      <div className="header-content">
        <div className="header__brand-image-container">
          <Link to="/">
          <img
            src={logoCenco}
            alt="Logo cencosud"
            className="header__hamburguer-menu-img"
          />
          </Link>
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
          <Link to="/registro">
            Registrarse
          </Link>
          {/* <Link ><li>Listado de products</li></Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
