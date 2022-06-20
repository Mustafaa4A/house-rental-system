import "./button.styles.css";

const Button = ({ children, className, ...others }) => {
  return (
    <button className={`button ${className}`} {...others}>
      {children}
    </button>
  );
};

export default Button;
