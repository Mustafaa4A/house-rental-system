import { BiLogOut } from "react-icons/bi";

import UserBg from "../../assets/bg-user.png";

const MainProfile = ({ user, signout }) => (
  <div>
    <div className="card-body text-center mb-3">
      <div className="mb-3">
        <span
          className="avatar avatar-2xl avatar-rounded position-relative"
          style={{
            backgroundImage: `url(${user.photoURL || UserBg})`,
            backgroundPosition: "top",
          }}
        ></span>
      </div>
      <div className="card-title mb-1">{user.displayName}</div>
      <div className="text-muted">{"User"}</div>
    </div>
    <a href="#s" className="card-btn">
      User Information
    </a>
    <a href="#s" className="card-btn">
      User Favorites
    </a>
    <a href="#s" className="card-btn">
      User History
    </a>
    <span className="card-btn bg-danger cursor-pointer" onClick={signout}>
      <BiLogOut size={20} className="me-3" />
      Sign Out
    </span>
  </div>
);

export default MainProfile;
