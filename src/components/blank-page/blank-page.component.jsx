import "./blank-page.styles.css";
const BlankPage = ({ children }) => {
  return (
    <div className="border-top-wide border-primary d-flex flex-column">
      <div className="page page-center">
        <div className="container-tight py-4">{children}</div>
      </div>
    </div>
  );
};

export default BlankPage;
