import { NavLink} from "react-router-dom";

function NavBar() {

  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className="nav-link"
      >
        Profile
      </NavLink>
    </nav>
  );
}

export default NavBar;
