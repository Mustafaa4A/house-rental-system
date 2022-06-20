import "./input-control.styles.css";
const InputControl = ({ label, ...otherProps }) => {
  return (
    <div className="input-container">
      <label
        className={`input-label ${otherProps.value.length ? "shrink" : ""}`}
      >
        {label}
      </label>
      <input className="input" {...otherProps} />
    </div>
  );
};

export default InputControl;
