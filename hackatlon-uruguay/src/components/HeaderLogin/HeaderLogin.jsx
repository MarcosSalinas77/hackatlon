import logoCenco from "./../../assets/logoCenco.png";
import { Link } from "react-router-dom";
import './HeaderLogic.css'

const HeaderLogin = (props) => {
  const {route, name} = props;
  
  return (
    <header>
      <div className="header-content">
      <div className="header__brand-image-container-alternative">
          <Link to="/">

          <img
            src={logoCenco}
            alt="Logo cencosud"
            className="header__hamburguer-menu-img"
          />

          </Link>
        </div>

        <nav className="list-items-alternative">
            <Link to={route} className="linkHeader">{name}</Link>

        </nav>
      </div>
    </header>
  )
}

export default HeaderLogin