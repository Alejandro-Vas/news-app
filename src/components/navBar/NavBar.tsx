import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-link">
      <NavLink className="nav-link__item" to="/">
        Articles
      </NavLink>
      <NavLink className="nav-link__item" to="/favorites">
        My favorites
      </NavLink>
    </div>
  );
}
export default NavBar;
