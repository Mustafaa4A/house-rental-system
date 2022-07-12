import { Link, NavLink } from "react-bootstrap";

const NavDropdownItem = ({ children, to, icon }) => {
  return (
    <div className="nav-item dropdown">
      <NavLink to={to} className="nav-link">
        <span className="nav-link-icon d-md-none d-lg-inline-block">
          {icon && icon}
        </span>
        <span className="nav-link-title"> {children} </span>
      </NavLink>
    </div>
  );
};

export default NavDropdownItem;
