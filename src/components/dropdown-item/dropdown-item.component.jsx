import { Link } from "react-router-dom";

const DropdownItem = ({ children, to, icon }) => {
  return (
    <Link to={to} className="dropdown-item">
      {icon && icon}
      <span className="p-2">{children}</span>
    </Link>
  );
};

export default DropdownItem;
