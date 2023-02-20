import { useContext } from "react";

import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { userSignOut } from "../../utils/firebase/authentication.util";

import MainProfile from "../../components/main-profile/main-profile.component";
import UserInformation from "../../components/user-information/user-information.component";

const UserProfile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await userSignOut();
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="border-top-wide border-primary d-flex flex-column">
      <div className="page">
        <div className="container py-4">
          <div className="row position-relative mt-4">
            <Link to="/" className="nav-link">
              <BsFillArrowLeftSquareFill
                size={30}
                className="cursor-pointer position-absolute top-0 start-0"
              />
            </Link>
            <div className="col-lg-3 mb-4">
              <MainProfile user={currentUser} signout={signOutHandler} />
            </div>
            <div className="col-lg-1"></div>
            <div className="col col-lg-8">
              <div className="row">
                <div className="col-12 mb-4">
                  <UserInformation user={currentUser} />
                </div>
                <div className="col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
