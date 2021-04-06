import React from "react";
import { Navbar, NavDropdown, Image, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import default_image from "./default_image.jpg";
import "./NavBar.css";

const NavBar = ({ image, username, logOutUser }) => {
  // Convert Buffer to base64 string.
  const bufferToBase64 = (data) => {
    let binary = "";
    let bytes = new Uint8Array(data);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  // Convert the base64 String to image.
  let userImage = image
    ? `data:${image.contentType};base64,${bufferToBase64(image.data.data)}`
    : default_image;

  const signout = () => {
    logOutUser();
  };
  return (
    <>
      <Navbar className="navbar" collapseOnSelect expand="md" variant="dark">
        <Navbar.Brand href="/dashboard">
          <h3 style={{ paddingLeft: "40px", fontSize: "160%" }}>Collab</h3>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggle d-none"
        />
        <Navbar.Collapse className="d-none"></Navbar.Collapse>
        <Row className="justify-content-end">
          <Button
            style={{
              backgroundColor: "inherit",
              color: "lightgrey",
              border: "none",
            }}
          >
            <i className="fa fa-bell" style={{ fontSize: "18px" }} />
          </Button>
          <NavDropdown
            className="d-none d-lg-block d-md-block"
            title={
              <Image
                style={{ width: "30px", height: "30px" }}
                className="user-avatar"
                src={userImage}
                roundedCircle
              />
            }
            id="dropdown-menu-align-right"
            alignRight
          >
            <NavDropdown.Item disabled className="ml-3">
              <Col>
                <Row style={{ color: "lightgrey" }}>Signed in as</Row>
                <Row
                  style={{
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  {username}
                </Row>
              </Col>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="1">
              <Link to="/profile">Your Profile</Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="2">
              <Link to="/settings" className="">
                Settings
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="ml-3" onClick={() => signout()}>
              Log Out
            </NavDropdown.Item>
          </NavDropdown>
        </Row>
      </Navbar>
    </>
  );
};

export default NavBar;
