import Divider from "../divider/divider.component";

const Column = ({ property, value, icon, col }) => (
  <div className={`col-md-${col ? col : "6"} mt-3`}>
    <p className="text-muted mb-1">{property}</p>
    <h4 className="mb-2">
      {icon && icon} {value}
    </h4>
    <Divider />
  </div>
);

export default Column;
