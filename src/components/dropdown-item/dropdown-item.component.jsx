import { Link } from "react-router-dom";

const DropdownItem = ({ children, to, icon, ...other }) => {
  return (
    <Link to={to || "#"} className="dropdown-item position-relative" {...other}>
      {icon && icon}
      <span className="p-2">{children}</span>
    </Link>
  );
};

export default DropdownItem;
