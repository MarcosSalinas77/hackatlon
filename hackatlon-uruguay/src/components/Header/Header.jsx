import React from 'react'
import menuImage from './../../assets/menu.svg'

const Header = () => {

  return (
    <nav>
        <div>
        <img
            src={menuImage}
            alt="Menú hamburguesa"
            className="header__hamburguer-menu-img"
          />
        </div>
    </nav>
  )
}

export default Header