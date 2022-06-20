import { useEffect } from "react";
import { useState } from "react";
import InputControl from "../input-control/input-control.component";
import { createUserFromEmailAndPassword } from "../utils/firebase/authentication.util";
import "./sign-up.styles.css";
//
const DEFAULT_FORM = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM);
  const { displayName, email, password, confirmPassword } = formFields;
  const [message, setMessage] = useState("");

  //on change handler
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //on focus of the input clear the message
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 10000);
  }, [message]);

  //submit form
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password Does Not Match");
      return;
    }

    try {
      const { user } = await createUserFromEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setMessage("Invalid email");
        return;
      }

      if (error.code === "auth/email-already-in-use") {
        setMessage("Email has already in use");
        return;
      }

      if (error.code === "auth/weak-password") {
        setMessage("Password should be at least 6 characters");
        return;
      }

      setMessage("An error occured");
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h3>Create new Account</h3>
      {message && <div>{message}</div>}
      <form onSubmit={onSubmit}>
        <InputControl
          label={"Full Name"}
          type="text"
          name="displayName"
          value={displayName}
          required={true}
          onChange={handlerChange}
        />
        <InputControl
          label={"Email"}
          type="email"
          name="email"
          value={email}
          required={true}
          onChange={handlerChange}
        />
        <InputControl
          label={"Password"}
          type="password"
          name="password"
          value={password}
          required={true}
          onChange={handlerChange}
        />
        <InputControl
          label={"Confirm Password"}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required={true}
          onChange={handlerChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
