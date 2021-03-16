import React, { useState } from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Image,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "./default_image.jpg";
import "./NavBar.css";
import SideBar from "../SideBar/SideBar";
import { signOut } from "../Auth/helper";
import { Redirect } from "react-router-dom";
// import Test from '../Test';
const NavBar = ({ logOutUser }) => {
  const signout = () => {
    logOutUser();
    signOut().then((data) => {
      if (data.error) {
      } else {
        // alert("Redirecting....");
        // <Test/>
      }
    });
  };
  return (
    <>
      {/* {redirectToLandingPage()} */}
      <SideBar />
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
                src={image}
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
                  elizab
                </Row>
              </Col>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="1">
              <Link to="/profile">Your Profile</Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="2">
              <Link to="/profile" className="">
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
