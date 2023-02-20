import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import Navbar from "../../components/navbar/navbar.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import "./navigation.styles.css";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <Fragment>
      <div className="sticky-top">
        <Header />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};
export default Navigation;
