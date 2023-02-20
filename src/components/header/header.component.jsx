import { Link } from "react-router-dom";
import { useContext } from "react";

import { FaSignOutAlt, FaUserAlt, FaSignInAlt } from "react-icons/fa";
import { FcSettings, FcFeedback } from "react-icons/fc";
import { TbBuildingPavilon } from "react-icons/tb";

import Avator from "../avator/avator.component";
import Dropdown from "../dropdown/dropdown.component";
import DropdownItem from "../dropdown-item/dropdown-item.component";
import UserFavorites from "../user-favorites/user-favorites.component";

import { userSignOut } from "../../utils/firebase/authentication.util";
import { UserContext } from "../../contexts/user.context";

import UserBg from "../../assets/bg-user.png";

import "./header.styles.css";

const Header = () => {
  const { currentUser } = useContext(UserContext);

  console.log("Current user", currentUser);

  const signOut = async () => {
    await userSignOut();
  };

  return (
    <header className="navbar navbar-expand-md navbar-light sticky-top d-print-none">
      <div className="container-xl">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <Link to={"/"}>
            <TbBuildingPavilon size={45} />
          </Link>
        </h1>
        <div className="navbar-nav flex-row order-md-last">
          <div className="nav-item dropdown d-none d-md-flex me-3">
            <div className="btn-list">{currentUser && <UserFavorites />}</div>
          </div>
          <div className="nav-item dropdown">
            {currentUser ? (
              <Avator
                size={"sm"}
                display={"xl"}
                target={"dropdown"}
                img={currentUser.photoURL || UserBg}
                name={currentUser.displayName && currentUser.displayName}
                title={currentUser.displayName && "User"}
              />
            ) : (
              <Link to={"/auth/sign-in"} type="button" className="nav-link">
                <FaSignInAlt style={{ fontSize: "1.7em" }} />
                <span className="p-2 pt-0 pb-0">Sign In</span>
              </Link>
            )}
            <Dropdown>
              <DropdownItem to={"/auth/profile"} icon={<FaUserAlt />}>
                Profile & account
              </DropdownItem>
              <DropdownItem to={""} icon={<FcFeedback />}>
                Feedback
              </DropdownItem>
              <div className="dropdown-divider"></div>
              <DropdownItem to={""} icon={<FcSettings />}>
                Settings
              </DropdownItem>
              <DropdownItem to={""} icon={<FaSignOutAlt />} onClick={signOut}>
                Logout
              </DropdownItem>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
