import { Link, NavLink } from "react-bootstrap";

const NavDropdownItem = ({ text, to, icon, active }) => {
  return (
    <li className={`nav-item dropdown ${active && "active"}`}>
      <NavLink
        to={to}
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        role="button"
        aria-expanded="false"
      >
        <span className="nav-link-icon d-md-none d-lg-inline-block">
          {icon && icon}
        </span>
        <span className="nav-link-title"> {text} </span>
      </NavLink>
      <div className="dropdown-menu">
        <div className="dropdown-menu-columns">
          <div className="dropdown-menu-column">
            <Link to={"/"} className="dropdown-item active">
              Rental House
            </Link>
            <Link to={"/"} className="dropdown-item active">
              Sell House
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NavDropdownItem;
