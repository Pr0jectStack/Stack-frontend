import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Row, Button } from "react-bootstrap";
import "./NavBar.css";

const GuestNavBar = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="md" variant="dark">
      <Navbar.Brand href="#">
        <h3>Collab</h3>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggle d-none"
      />
      <Navbar.Collapse className="d-none"></Navbar.Collapse>
      <Row className="justify-content-end">
      <Button
          href="/signup"
          style={{
            backgroundColor: "inherit",
            color: "lightblue",
            border: "none",
            textDecoration: "underline",
          }}
        >
          Sign Up
        </Button>
        <div style={{ width: "10px" }}></div>
        <Button
          href="/signin"
          style={{
            color: "white",
          }}
        >
          Sign In
        </Button>
        <div style={{ width: "10px" }}></div>
      </Row>
    </Navbar>
  );
};

export default GuestNavBar;
