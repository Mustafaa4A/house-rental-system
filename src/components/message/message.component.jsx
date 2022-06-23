import "./message.styles.css";

const Message = ({ children }) => {
  return (
    <div className="alert alert-warning message-container">{children}</div>
  );
};

export default Message;
