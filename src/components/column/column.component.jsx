const Column = ({ property, value, icon, col }) => (
  <div className={`col-md-${col ? col : "6"} mt-3`}>
    <p className="text-muted mb-1">{property}</p>
    <h4 className="mb-2">
      {icon && icon} {value}
    </h4>
    <div class="pt-0 border-1 border-top " />
  </div>
);

export default Column;
