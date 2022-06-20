import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.css";
import Button from "../../button/button.component";
import { UserContext } from "../../../contexts/user.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <Fragment>
      <Navbar expand="lg" className="navigation w-100 shadow">
        <Container className="navigation-container">
          <Navbar.Brand>
            <Link to={"/"} className="navigation-brand">
              LOGO
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className="toggle-button" aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="list ms-auto">
              <NavLink to={"/houses-list"} className="navigation-link">
                <Button> </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {}
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
