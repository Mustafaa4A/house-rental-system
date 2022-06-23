import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/user.context";
import Button from "../../button/button.component";
import InputControl from "../../input-control/input-control.component";
import LineSeparator from "../../line-separator/line-separator.component";
import Message from "../../message/message.component";
import {
  createUserFromAuth,
  signInUsingEmailAndPasswor,
  signInWithFacebook,
  signInWithGoogle,
} from "../../../utils/firebase/authentication.util";
import "./sign-in.styles.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useEffect } from "react";

const DEFAULT_FORM = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFieleds, setFormFields] = useState(DEFAULT_FORM);
  const { email, password } = formFieleds;
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); //navigate

  //
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFieleds, [name]: value });
  };

  //on focus of the input clear the message
  // useEffect(() => {
  //   setTimeout(() => {
  //     setMessage("");
  //   }, 10000);
  // }, [message]);

  //form submit login with email and password
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInUsingEmailAndPasswor(email, password);
      resetForm();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setMessage("User not found");
        return;
      }

      if (error.code === "auth/wrong-password") {
        setMessage("Worng password");
        return;
      }

      if (error.code === "auth/network-request-failed") {
        setMessage("Network Failed");
        return;
      }

      if (error.code === "auth/too-many-requests") {
        setMessage("Too may requests");
        return;
      }

      setMessage("Error Ocurred");

      console.log(error.message);
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

  return (
    <div className="signin-container">
      <div className="form-container">
        <h3 className="title">Login Now !</h3>
        {message && <Message>{message}</Message>}
        <form onSubmit={onSubmit}>
          <InputControl
            label={"Email"}
            value={email}
            type="email"
            name="email"
            required={true}
            onChange={handlerChange}
          />
          <InputControl
            label={"Password"}
            value={password}
            type="password"
            name="password"
            required={true}
            onChange={handlerChange}
          />
          <Button type="submit" className="login">
            LOGIN
          </Button>
          <LineSeparator>OR</LineSeparator>
          <Button type="button" className="google" onClick={loginWithGogle}>
            <FaGoogle className="icon" />
            Sign In With Google
          </Button>
          <Button
            type="button"
            className="facebook"
            onClick={loginWithFacebook}
          >
            <FaFacebookF className="icon" />
            Sign In With Facebook
          </Button>
        </form>
        <div className="footer" style={{ textAlign: "center" }}>
          Create a new account <Link to={"/auth/sign-up"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
