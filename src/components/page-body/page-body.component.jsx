import Button from "../button/button.component";

const PageBody = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-body">
        <div className="container-xl">{children}</div>
      </div>
    </div>
  );
};

export default PageBody;
