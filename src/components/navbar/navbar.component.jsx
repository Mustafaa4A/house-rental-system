import { FcHome, FcServices, FcOrganization, FcContacts } from "react-icons/fc";
import { BiBuildingHouse } from "react-icons/bi";
import NavItem from "../nav-item/nav-item.component";
import SearchInput from "../search-input/search-input.component";

const Navbar = () => {
  return (
    <div className="navbar-expand-md">
      <div className="collapse navbar-collapse" id="navbar-menu">
        <div className="navbar navbar-light">
          <div className="container-xl">
            <ul className="navbar-nav">
              <NavItem to={"/sign-in"} icon={<FcHome />} active={true}>
                Home
              </NavItem>

              <NavItem to={"/sing-up"} icon={<FcOrganization />}>
                About
              </NavItem>
              <NavItem to={"/"} icon={<BiBuildingHouse />}>
                Properties
              </NavItem>
              <NavItem to={"/"} icon={<FcContacts />}>
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
