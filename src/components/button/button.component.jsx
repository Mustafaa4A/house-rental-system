import "./button.styles.css";
const Button = ({ children, icon, ...others }) => {
  return (
    <button type="button" className="btn btn-white w-100" {...others}>
      {icon}
      <span className="m-2 mt-0 mb-0">{children}</span>
    </button>
  );
};

export default Button;
