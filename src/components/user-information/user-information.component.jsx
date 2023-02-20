import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill, BsCalendarDateFill } from "react-icons/bs";

import Column from "../../components/column/column.component";

const UserInformation = ({ user }) => (
  <div className="card shadow">
    <div className="card-body">
      <h1 className="card-title text-muted mb-3">User Infromation</h1>
      <Column
        property={"Full Name"}
        value={user.displayName}
        col={12}
        icon={<FaUserAlt />}
      />
      <Column
        property={"ُEmail"}
        value={user.email}
        col={12}
        icon={<MdEmail />}
      />
      <Column
        property={"Phone Number"}
        value={user.phoneNumber}
        col={12}
        icon={<BsTelephoneFill />}
      />
      <Column
        property={"Created"}
        value={user.creationTime}
        col={12}
        icon={<BsCalendarDateFill />}
      />
    </div>
  </div>
);

export default UserInformation;
