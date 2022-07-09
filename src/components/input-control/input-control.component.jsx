import { Link } from "react-router-dom";
import "./input-control.styles.css";
const InputControl = ({ label, icon, ...otherProps }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group input-group-flat mt-1">
        <input
          className="form-control"
          autoComplete="off"
          {...otherProps}
          required
        />
        {icon && (
          <span className="input-group-text">
            <Link to={""} className="link-secondary" title="Show password">
              {icon}
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default InputControl;
