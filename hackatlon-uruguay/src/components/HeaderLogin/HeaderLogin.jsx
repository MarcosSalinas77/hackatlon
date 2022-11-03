import logoCenco from "./../../assets/logoCenco.png";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
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

       
     

        <nav className="list-items">
          <ul>
            <Link to="/login"><li>Inciar sesión</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderLogin