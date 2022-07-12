import "./button.styles.css";
const Button = ({ children, bg, icon, ...others }) => {
  return (
    <button
      type="button"
      className={`btn btn-${bg ? bg : "white"} w-100 position-relative`}
      {...others}
    >
      {icon && icon}
      <span className={icon && "ms-2"}>{children}</span>
    </button>
  );
};

export default Button;
