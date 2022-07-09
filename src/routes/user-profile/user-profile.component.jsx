import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { userSignOut } from "../../utils/firebase/authentication.util";
import Button from "../../components/button/button.component";
const UserProfile = () => {
  //
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const signOutHandler = async () => {
    await userSignOut();
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div>
      <h1>Profile</h1>
      <Button onClick={signOutHandler}>Sign Out</Button>
    </div>
  );
};

export default UserProfile;
