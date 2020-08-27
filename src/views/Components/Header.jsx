import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledCollapse,
} from "reactstrap";

class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar className="navbar-main" expand="lg" id="navbar-main">
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img alt="..." src={require("assets/img/logo.png")} />
                Studios
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Nav className="align-items-lg-center ml-lg-auto" navbar>
                    <NavItem>
                      <NavLink href="/" className="nav-link-icon">
                        <i className="fa fa-home" />
                        <span className="nav-link-inner--text d-lg-none ml-2">
                          Home
                        </span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://assetstore.unity.com/publishers/20864?utm_source=l9studios.com&utm_medium=header"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                      <span className="nav-link-inner--text ml-2">Asset Store</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/contact"
                    >
                      <i className="fa fa-envelope" />
                      <span className="nav-link-inner--text ml-2">Contact</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Header;
