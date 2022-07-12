const PageHeader = ({ children }) => {
  return (
    <div className="container-xl">
      <div className="page-header d-print-none">
        <div className="row g-2 align-items-center">{children}</div>
      </div>
    </div>
  );
};

export default PageHeader;
