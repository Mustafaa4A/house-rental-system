import { Link } from "react-router-dom";
import Button from "../button/button.component";
import { GrFavorite } from "react-icons/gr";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { FcSettings, FcFeedback } from "react-icons/fc";
import Logo from "../../assets/house-logo.png";
import "./header.styles.css";
import Avator from "../avator/avator.component";
import Dropdown from "../dropdown/dropdown.component";
import DropdownItem from "../dropdown-item/dropdown-item.component";

const Header = () => {
  return (
    <header className="navbar navbar-expand-md navbar-light d-print-none">
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
          <div className="nav-item d-none d-md-flex me-3">
            <div className="btn-list">
              <Button icon={<GrFavorite />}>Favorites</Button>
            </div>
          </div>
          <div className="nav-item dropdown">
            <Avator
              size={"sm"}
              target={"dropdown"}
              img={Logo}
              name={"Hafza Abdulkadir"}
              title={"Owner"}
            />
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
              <DropdownItem to={""} icon={<FaSignOutAlt />}>
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
