import "./line-separator.styles.css";

const LineSeparator = ({ children }) => {
  return (
    <div className="seprator text-muted">
      <div></div>
      {children}
      <div></div>
    </div>
  );
};

export default LineSeparator;
