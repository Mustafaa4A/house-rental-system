import "./message.styles.css";

const Message = ({ children, icon, closeModal }) => {
  return (
    <div>
      <div className="modal-body text-center py-4">
        {icon && icon}
        <div className="text-muted">{children}</div>
      </div>
      <div className="modal-footer">
        <div className="w-100">
          <div className="row">
            <div className="col">
              <button className="btn w-100" onClick={closeModal}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
