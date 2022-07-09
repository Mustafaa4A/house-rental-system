import { useEffect } from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import BlankPage from "../../components/blank-page/blank-page.component";
import Button from "../../components/button/button.component";
import FormButton from "../../components/form-button/form-button.component";
import InputControl from "../../components/input-control/input-control.component";
import Message from "../../components/message/message.component";
import {
  createUserFromAuth,
  createUserFromEmailAndPassword,
} from "../../utils/firebase/authentication.util";
import Logo from "../../assets/house-logo.png";
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
  //
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  //change visibolity of the password
  const visibleHandler = () => {
    setIsVisible(!isVisible);
  };

  //on change handler
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //on focus of the input clear the message
  // useEffect(() => {
  //   setTimeout(() => {
  //     setMessage("");
  //   }, 10000);
  // }, [message]);

  //submit form
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password Does Not Match");
      return;
    }

    try {
      const { user } = await createUserFromEmailAndPassword(email, password);
      await createUserFromAuth(user, { displayName });
      navigate("/auth/sign-in");
      resetForm();
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

  //
  const resetForm = () => {
    setFormFields(DEFAULT_FORM);
  };

  return (
    <BlankPage>
      <div className="text-center mb-4">
        <Link to="/" class="navbar-brand navbar-brand-autodark">
          <img src={Logo} height="36" alt="" />
        </Link>
      </div>
      <form className="card card-md" autocomplete="off">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Create new account</h2>
          <InputControl type="text" label="Name" placeholder="Enter Name" />
          <InputControl type="text" label="Email" placeholder="Email" />
          <InputControl
            type={isVisible ? "text" : "password"}
            label="Password"
            placeholder="Enter Password"
            icon={
              isVisible ? (
                <FaEye style={{ fontSize: "1.2em" }} onClick={visibleHandler} />
              ) : (
                <FaEyeSlash
                  style={{ fontSize: "1.2em" }}
                  onClick={visibleHandler}
                />
              )
            }
          />

          <InputControl
            type={isVisible ? "text" : "password"}
            label="Confirm Password"
            placeholder="Re-Enter Password"
            icon={
              isVisible ? (
                <FaEye style={{ fontSize: "1.2em" }} onClick={visibleHandler} />
              ) : (
                <FaEyeSlash
                  style={{ fontSize: "1.2em" }}
                  onClick={visibleHandler}
                />
              )
            }
          />

          <FormButton>SIGN UP</FormButton>
        </div>
      </form>
      <div className="text-center text-muted mt-3">
        Already have account?
        <Link to={"/sign-in"} className="p-2" tabindex="-1">
          Sign In
        </Link>
      </div>
    </BlankPage>
  );
};

export default SignUp;
