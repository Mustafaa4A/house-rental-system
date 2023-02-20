import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, to, icon }) => {
  const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   setIsActive(true);
  //   return setIsActive(false);
  // }, []);

  return (
    <li className={`nav-item ${isActive && "active"}`}>
      <NavLink
        to={to}
        className="nav-link"
        style={(isActive) => ({
          active: isActive ? setIsActive(false) : setIsActive(false),
        })}
      >
        <span className="nav-link-icon d-md-none d-lg-inline-block">
          {icon && icon}
        </span>
        <span className="nav-link-title"> {children} </span>
      </NavLink>
    </li>
  );
};

export default NavItem;
