import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import Button from "../../components/button/button.component";
import InputControl from "../../components/input-control/input-control.component";
import {
  signInUsingEmailAndPasswor,
  signInWithFacebook,
  signInWithGoogle,
} from "../../utils/firebase/authentication.util";
import { FaFacebook, FaGoogle, FaEyeSlash, FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiError } from "react-icons/bi";
import { useEffect } from "react";
import BlankPage from "../../components/blank-page/blank-page.component";
import Logo from "../../assets/house-logo.png";
import FormButton from "../../components/form-button/form-button.component";
import "./sign-in.styles.css";
import Message from "../../components/message/message.component";
import Modal from "../../components/modal/modal.component";

const DEFAULT_FORM = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFieleds, setFormFields] = useState(DEFAULT_FORM);
  const { email, password } = formFieleds;
  const [message, setMessage] = useState();
  const navigate = useNavigate(); //navigate
  const [isVisible, setIsVisible] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  //change visibolity of the password
  const visibleHandler = () => {
    setIsVisible(!isVisible);
  };

  //
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFieleds, [name]: value });
  };

  //form submit login with email and password
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await signInUsingEmailAndPasswor(email, password);
      resetForm();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setMessage("User not found");
        setIsShowing(true);
        return;
      }

      if (error.code === "auth/wrong-password") {
        setMessage("Worng password");
        setIsShowing(true);
        return;
      }

      if (error.code === "auth/network-request-failed") {
        setMessage("Network Failed");
        setIsShowing(true);
        return;
      }

      if (error.code === "auth/too-many-requests") {
        setMessage("Too may requests");
        setIsShowing(true);
        return;
      }

      setMessage("Error Ocurred");
      setIsShowing(true);
    }
  };

  //
  const resetForm = () => {
    setFormFields(DEFAULT_FORM);
  };

  //login with google
  const loginWithGogle = async () => {
    await signInWithGoogle();
    navigate("/");
  };

  //login with facebook
  const loginWithFacebook = async () => {
    await signInWithFacebook();
    navigate("/");
  };

  //show modal
  const modalHandler = () => {
    setIsShowing(false);
  };

  return (
    <BlankPage>
      <div className="text-center mb-4">
        <Link to="/" className="navbar-brand navbar-brand-autodark">
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

      <form className="card card-md" onSubmit={submitHandler}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Login to your account</h2>
          <InputControl
            type="email"
            label="Email Address"
            placeholder="Enter Email"
            value={email}
            name="email"
            onChange={handlerChange}
          />
          <InputControl
            type={isVisible ? "text" : "password"}
            label="Password"
            placeholder="Enter Password"
            value={password}
            name="password"
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

          <FormButton>SIGN IN</FormButton>
        </div>
        <div className="hr-text">or login with</div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <Button icon={<FcGoogle />} onClick={loginWithGogle}>
                Google
              </Button>
            </div>
            <div className="col">
              <Button icon={<FaFacebook />} onClick={loginWithFacebook}>
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </form>
      <div className="text-center text-muted mt-3">
        Don't have account yet?
        <Link to={"/auth/sign-up"} tabIndex="-1" className="p-2">
          Sign up
        </Link>
      </div>
    </BlankPage>
  );
};

export default SignIn;
