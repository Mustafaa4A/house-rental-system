import { useEffect } from "react";
import "./message.styles.css";

const Message = ({ children, icon, closeModal }) => {
  useEffect(() => {
    const audio = new Audio(
      "http://freesoundeffect.net/sites/default/files/incorrect-answer--1-sound-effect-27493287.mp3"
    );
    audio.play();
  }, []);
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
