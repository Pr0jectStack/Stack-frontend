import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./YourWorkspaceContainer.css";

const YourWorkspacesComponent = ({ workspaces, userId }) => {
  return (
    <div className="ml-3">
      {workspaces &&
        workspaces.map((workspace) => (
          <Row className="mt-3 mb-3">
            <Col xs={8} md={8} lg={10}>
              <h4 style={{ color: "rgb(172, 161, 161)" }}>{workspace.name}</h4>
            </Col>
            <Col>
              {workspace.owner === userId && (
                <Link to={`../../workspace/${workspace._id}/settings`}>
                  <Button id="settings-button">Settings</Button>
                </Link>
              )}
            </Col>
          </Row>
        ))}
    </div>
  );
};

export default YourWorkspacesComponent;
