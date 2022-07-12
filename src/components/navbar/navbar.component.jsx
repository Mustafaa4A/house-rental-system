import { FcHome, FcServices, FcOrganization, FcContacts } from "react-icons/fc";
import { BiBuildingHouse } from "react-icons/bi";
import NavItem from "../nav-item/nav-item.component";
import SearchInput from "../search-input/search-input.component";
import Dropdown from "../dropdown/dropdown.component";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Avator from "../avator/avator.component";

const Navbar = () => {
  return (
    <div className="navbar-expand-md">
      <div className="collapse navbar-collapse" id="navbar-menu">
        <div className="navbar navbar-light">
          <div className="container-xl">
            <ul className="navbar-nav">
              <NavItem to={"/"} icon={<FcHome />} active={true}>
                Home
              </NavItem>
              <NavItem to={"/about-us"} icon={<FcOrganization />}>
                About
              </NavItem>
              <NavItem to={"/properties"} icon={<BiBuildingHouse />}>
                Properties
              </NavItem>
              <NavItem to={"/services"} icon={<FcServices />}>
                Services
              </NavItem>
              <NavItem to={"/contact-us"} icon={<FcContacts />}>
                Contact Us
              </NavItem>
            </ul>
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
