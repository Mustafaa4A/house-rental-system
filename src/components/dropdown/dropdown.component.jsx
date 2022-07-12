const Dropdown = ({ children, ...other }) => {
  return (
    <div
      className="dropdown-menu dropdown-menu-end dropdown-menu-arrow p-2"
      {...other}
    >
      {children}
    </div>
  );
};

export default Dropdown;
