import React from "react";
import menuImage from "./../../assets/menu.svg";
import logoCenco from "./../../assets/logoCenco.png";

import "./Header.css";
import {Link, Links} from 'react-router-dom'

const Header = () => {
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
            placeholder="Buscar productos..."
          />
        </div>

        <nav className="list-items">
          <ul>
            <Link to="/login"><li>Inciar sesión</li></Link>
            {/* <Link ><li>Listado de products</li></Link> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
