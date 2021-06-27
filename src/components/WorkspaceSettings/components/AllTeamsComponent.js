import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AllTeamsComponent.css";

const AllTeamsComponent = ({ teams }) => {
  return (
    <div className="ml-3">
      {teams &&
        teams.map((team) => (
          <Row className="mt-3 mb-3">
            <Col xs={8} md={8} lg={10}>
              <h4 style={{ color: "rgb(172, 161, 161)" }}>{team.name}</h4>
            </Col>
            <Col>
              <Link to={`../../team/${team._id}/settings`}>
                <Button id="settings-button">Settings</Button>
              </Link>
            </Col>
          </Row>
        ))}
    </div>
  );
};

export default AllTeamsComponent;
