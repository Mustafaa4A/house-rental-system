import "./modal.styles.css";

const Modal = ({ children, size, type, closeModal }) => {
  return (
    <div className="modal-bg bg-blur">
      <div
        className={`modal-container modal-dialog modal-${size} modal-dialog-centered`}
      >
        <div className="modal-content shadow">
          <span type="button" className="btn-close" onClick={closeModal}></span>
          <div className={`modal-status bg-${type}`}></div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
