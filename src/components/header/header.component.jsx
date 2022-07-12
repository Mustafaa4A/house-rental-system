import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { FaSignOutAlt, FaUserAlt, FaSignInAlt } from "react-icons/fa";
import { FcSettings, FcFeedback } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import Button from "../button/button.component";
import Avator from "../avator/avator.component";
import Dropdown from "../dropdown/dropdown.component";
import DropdownItem from "../dropdown-item/dropdown-item.component";
import { userSignOut } from "../../utils/firebase/authentication.util";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import Logo from "../../assets/house-logo.png";
import UserBg from "../../assets/bg-user.png";
import data from "../../properties.json";
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
            <img
              src={Logo}
              width="110"
              height="32"
              alt="Logo"
              className="navbar-brand-image"
            />
          </Link>
        </h1>
        <div className="navbar-nav flex-row order-md-last">
          <div className="nav-item dropdown d-none d-md-flex me-3">
            <div className="btn-list">
              <Button icon={<GrFavorite size={23} />} data-bs-toggle="dropdown">
                Favorites
                {data.length && (
                  <span className="position-absolute top-0 start-100 translate-middle badge bg-red rounded-circle">
                    {data.length}
                  </span>
                )}
              </Button>
              <Dropdown>
                {data.map((property) => (
                  <DropdownItem>
                    <Avator
                      size={"md"}
                      display={"md"}
                      to={`/properties/${property.id}`}
                      img={property.img}
                      name={property.title}
                      title={`Price: ${property.price}`}
                    />
                    <span className="position-absolute top-0 end-0 m-2">
                      <MdDelete
                        size={18}
                        className="text-danger"
                        onClick={() => alert(property.id)}
                      />
                    </span>
                  </DropdownItem>
                ))}
              </Dropdown>
            </div>
          </div>
          <div className="nav-item dropdown">
            {currentUser ? (
              <Avator
                size={"sm"}
                display={"xl"}
                target={"dropdown"}
                img={currentUser.photoURL || UserBg}
                name={currentUser.displayName && currentUser.displayName}
                title={currentUser.displayName && "Owner"}
              />
            ) : (
              <Link to={"/auth/sign-in"} type="button" className="nav-link">
                <FaSignInAlt style={{ fontSize: "1.7em" }} />
                <span className="p-2 pt-0 pb-0">Sign In</span>
              </Link>
            )}
            <Dropdown>
              <DropdownItem to={""} icon={<FaUserAlt />}>
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
