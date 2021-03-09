import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Image,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import image from "./default_image.jpg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="md" variant="dark">
      <Navbar.Brand href="#">
        <h3 className="logo-small d-sm-block d-md-none">Collab</h3>
        <h3 className="logo d-none d-sm-none d-md-block">Collab</h3>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggle pull-left"
      />
      <Navbar.Collapse>
        <Nav className="d-sm-block d-md-none">
          <Nav.Link>Workspaces</Nav.Link>
        </Nav>
        <Nav className="d-sm-block d-md-none">
          <Nav.Link>Account</Nav.Link>
        </Nav>
        <Nav className="d-sm-block d-md-none">
          <Nav.Link>Settings</Nav.Link>
        </Nav>
        <Nav className="d-sm-block d-md-none">
          <Nav.Link>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Row className="justify-content-end">
        <Button
          style={{
            backgroundColor: "inherit",
            color: "lightgrey",
            border: "none",
          }}
        >
          <i className="fa fa-bell" />
        </Button>
        <NavDropdown
          className="d-none d-lg-block d-md-block"
          title={
            <Image
              style={{ width: "25px", height: "25px" }}
              className="user-avatar"
              src={image}
              roundedCircle
            />
          }
          id="dropdown-menu-align-right"
          alignRight
        >
          <NavDropdown.Item disabled>
            <Col>
              <Row style={{ color: "lightgrey" }}>Signed in as</Row>
              <Row
                style={{
                  color: "white",
                  fontWeight: "700",
                }}
              >
                elizab
              </Row>
            </Col>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="1">Your Profile</NavDropdown.Item>
          <NavDropdown.Item eventKey="2">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Log Out</NavDropdown.Item>
        </NavDropdown>
      </Row>
    </Navbar>
  );
};

export default NavBar;
