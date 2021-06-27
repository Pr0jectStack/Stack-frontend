import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "./GeneralSettingsComponent.css";

const GeneralSettingsComponent = ({ name, description }) => {
  const onSubmit = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: `Are you sure to do delete "${name}" ?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Delete..."),
        },
        {
          label: "No",
          onClick: () => alert("Cancelled.."),
        },
      ],
    });
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label id="label">Workspace Name</Form.Label>
          <Form.Control
            name="workspace_name"
            id="workspace_name"
            value={name}
            readOnly
          />
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Workspace Description</Form.Label>
          <Form.Control
            as="textarea"
            name="workspace_desc"
            id="workspace_desc"
            value={description}
            readOnly
          />
        </Form.Group>
      </Form>

      <h4 id="danger-zone-heading">Danger Zone</h4>
      <Col>
        <Row id="danger-zone-box">
          <Col className="pl-1">
            <h5 id="danger-info-heading">Delete Workspace</h5>
            <h6 id="danger-info-subtitle">
              This action will permanently delete the workspace.
            </h6>
          </Col>
          <Button variant="danger" id="delete-button" onClick={onSubmit}>
            Delete
          </Button>
        </Row>
      </Col>
    </div>
  );
};

export default GeneralSettingsComponent;
