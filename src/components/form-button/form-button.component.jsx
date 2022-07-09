import "./form-button.styles.css";
const FormButton = ({ children }) => {
  return (
    <div className="form-footer">
      <button type="submit" className="btn btn-primary w-100">
        {children}
      </button>
    </div>
  );
};

export default FormButton;
