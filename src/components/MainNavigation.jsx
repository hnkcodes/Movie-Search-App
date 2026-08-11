import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <>
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movie"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Movie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookmark"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Book Mark
          </NavLink>
        </li>
      </ul>
    </>
  );
}
