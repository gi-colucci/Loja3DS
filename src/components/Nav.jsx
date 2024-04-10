// http://localhost:5174/
import "../css/style.css"
import { Link } from "react-router-dom";

export function Nav() {


    return (
      <>
      <header className="menu">
        <nav className="nav-menu">
          <ul>
            <Link to="/" className="link">Home</Link>
            <Link to="/Sobre"className="link">Sobre</Link>
            <Link to="/Contato"className="link">Contato</Link>
            <Link to="/Login"className="link">Login</Link>
          </ul>
        </nav>
      </header>
      </>
    )
  }