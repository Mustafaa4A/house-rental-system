import { Fragment } from "react";

const InputText = ({ text, label, ...other }) => {
  return (
    <Fragment>
      <label className="form-label terxt-muted">{label}</label>
      <div class="input-group">
        <span class="input-group-text">{text}</span>
        <input class="form-control" autocomplete="off" {...other} />
      </div>
    </Fragment>
  );
};

export default InputText;
