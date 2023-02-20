import { useState } from "react";

import InputControl from "../input-control/input-control.component";
import Button from "../button/button.component";

const DEFAULT_FORM = {
  fName: "",
  lName: "",
  email: "",
  message: "",
};

const SendUsEmail = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM);
  const { fName, lName, email, message } = formFields;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card shadow-lg p-32 pt-3 pb-1">
      <div className="card-body">
        <h3 className="card-title text-center mb-4">SEND US EMAIL</h3>
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-md-6">
              <InputControl
                label={"First Name"}
                placeholder="First Name"
                type="text"
                name="fName"
                value={fName}
                onChange={changeHandler}
              />
            </div>
            <div className="col-md-6">
              <InputControl
                label={"Last Name"}
                placeholder="Last Name"
                type="text"
                name="lName"
                value={lName}
                onChange={changeHandler}
              />
            </div>
            <div className="col-12">
              <InputControl
                label={"Email"}
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={changeHandler}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea
                className="form-control mb-4"
                name="message"
                value={message}
                required
                cols="30"
                rows="5"
                onChange={changeHandler}
              ></textarea>
            </div>
            <Button bg={"primary"} type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendUsEmail;
