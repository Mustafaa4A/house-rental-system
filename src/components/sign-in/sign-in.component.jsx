import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import Button from "../button/button.component";
import InputControl from "../input-control/input-control.component";
import {
  createUserFromAuth,
  signInUsingEmailAndPasswor,
  signInWithFacebook,
  signInWithGoogle,
} from "../utils/firebase/authentication.util";
import "./sign-in.styles.css";

const DEFAULT_FORM = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFieleds, setFormFields] = useState(DEFAULT_FORM);
  const { email, password } = formFieleds;
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); //navigate
  const { setCurrentUser } = useContext(UserContext);

  //
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFieleds, [name]: value });
  };

  //form submit login with email and password
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInUsingEmailAndPasswor(email, password);
      // console.log(user);

      //setting user into context
      setCurrentUser(user);
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

      setMessage("Error Ocurred");

      console.log(error.message);
    }
  };

  //login with google
  const loginWithGogle = async () => {
    const { user } = await signInWithGoogle();
    await createUserFromAuth(user);
    console.log(user);
  };

  //login with facebook
  const loginWithFacebook = async () => {
    const { user } = await signInWithFacebook();
    await createUserFromAuth(user);
    console.log(user);
  };

  return (
    <div className="signin-container">
      <div className="form-container">
        <h1 className="title">Login Now !</h1>
        {message && <div>{message}</div>}
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
          <Button type="submit">LOGIN</Button>
          <div className="seprator">Or</div>
          <Button type="button" className="google" onClick={loginWithGogle}>
            Sign In With Google
          </Button>
          <Button
            type="button"
            className="facebook"
            onClick={loginWithFacebook}
          >
            Sign In With Facebook
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
