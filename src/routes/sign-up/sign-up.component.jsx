import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BlankPage from "../../components/blank-page/blank-page.component";
import FormButton from "../../components/form-button/form-button.component";
import InputControl from "../../components/input-control/input-control.component";
import Message from "../../components/message/message.component";
import {
  createUserFromAuth,
  createUserFromEmailAndPassword,
} from "../../utils/firebase/authentication.util";
import Logo from "../../assets/house-logo.png";
import "./sign-up.styles.css";
import Modal from "../../components/modal/modal.component";
import { BiError } from "react-icons/bi";
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

  const [isShowing, setIsShowing] = useState(false);
  //change visibolity of the password
  const visibleHandler = () => {
    setIsVisible(!isVisible);
  };

  //on change handler
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password Does Not Match");
      setIsShowing(true);
      return;
    }

    try {
      const { user } = await createUserFromEmailAndPassword(email, password);
      await createUserFromAuth(user, { displayName });
      navigate("/sign-in");
      resetForm();
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setMessage("Invalid email");
        setIsShowing(true);
        return;
      }

      if (error.code === "auth/email-already-in-use") {
        setMessage("Email has already in use");
        setIsShowing(true);
        return;
      }

      if (error.code === "auth/weak-password") {
        setMessage("Password should be at least 6 characters");
        setIsShowing(true);
        return;
      }

      setMessage("An error occured");
      setIsShowing(true);
    }
  };

  //
  const resetForm = () => {
    setFormFields(DEFAULT_FORM);
  };

  //show modal
  const modalHandler = () => {
    setIsShowing(false);
  };

  return (
    <BlankPage>
      <div className="text-center mb-4">
        <Link to="/" class="navbar-brand navbar-brand-autodark">
          <img src={Logo} height="36" alt="" />
        </Link>
      </div>

      {isShowing && (
        <Modal size={"sm"} type={"danger"} closeModal={modalHandler}>
          <Message
            icon={<BiError className="display-2 text-danger" />}
            closeModal={modalHandler}
          >
            {message}
          </Message>
        </Modal>
      )}

      <form className="card card-md" autoComplete="off" onSubmit={handleSubmit}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Create new account</h2>
          <InputControl
            type="text"
            label="Name"
            placeholder="Enter Name"
            name="displayName"
            value={displayName}
            onChange={handlerChange}
          />
          <InputControl
            type="email"
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handlerChange}
          />
          <InputControl
            type={isVisible ? "text" : "password"}
            label="Password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={handlerChange}
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
            name="confirmPassword"
            value={confirmPassword}
            onChange={handlerChange}
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
        <Link to={"/auth/sign-in"} className="p-2" tabIndex="-1">
          Sign In
        </Link>
      </div>
    </BlankPage>
  );
};

export default SignUp;
