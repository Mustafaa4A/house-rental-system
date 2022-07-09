import "./message.styles.css";

const Message = ({ children, type, icon }) => {
  return (
    <div
      className="modal modal-blur fade "
      id="modal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-sm modal-dialog-centered"
        role="document"
      >
        <div className="modal-content shadow">
          <span
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></span>
          <div className={`modal-status bg-${type}`}></div>
          <div className="modal-body text-center py-4">
            {icon && icon}
            <div className="text-muted">{children}</div>
          </div>
          <div className="modal-footer">
            <div className="w-100">
              <div className="row">
                <div className="col">
                  <span href="#" className="btn w-100" data-bs-dismiss="modal">
                    OK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
