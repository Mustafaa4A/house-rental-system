import { NavLink } from "react-router-dom";

const NavItem = ({ children, to, icon, active }) => {
  return (
    <li className={`nav-item ${active && "active"}`}>
      <NavLink to={to} className="nav-link">
        <span className="nav-link-icon d-md-none d-lg-inline-block">
          {icon && icon}
        </span>
        <span className="nav-link-title"> {children} </span>
      </NavLink>
    </li>
  );
};

export default NavItem;
