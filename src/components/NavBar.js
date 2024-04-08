import { NavLink} from "react-router-dom";
import "./navbar.css"

function NavBar() {

  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to ="/favorites"
        className="nav-link"
        activeClassName="active"
      >
        Favorites
      </NavLink>
      <NavLink
        to="/profile"
        className="nav-link"
        activeClassName="active"
      >
        Profile
      </NavLink>
    </nav>
  );
}

export default NavBar;
