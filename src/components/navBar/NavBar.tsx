import { NavLink } from "react-router-dom";
const NavBar: React.FC = () => {
  return (
    <ul className="nav-link">
      <NavLink className="nav-link__item" to="/">
        Articles
      </NavLink>
      <NavLink className="nav-link__item" to="/favorites">
        My favorites
      </NavLink>
    </ul>
  );
};
export default NavBar;
