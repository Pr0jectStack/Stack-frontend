import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import { useForm } from "react-hook-form";
import "./GeneralSettingsComponent.css";

const GeneralSettingsComponent = (props) => {
  const { wid, name, description } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      workspace_name: name,
      workspace_desc: description,
    },
  });

  const onSubmit = ({ workspace_name, workspace_desc }) => {
    const data = {
      wid: wid,
      name: workspace_name,
      desc: workspace_desc,
    };

    if (workspace_name !== name || workspace_desc !== description) {
      props.updateWorkspaceDetails(data);
    }
  };

  const onDelete = () => {
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
      <Form id="workspace-details-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label id="label">Workspace Name</Form.Label>
          <Form.Control
            type="text"
            name="workspace_name"
            id="workspace_name"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 50,
              pattern: /^[ A-Za-z0-9]*$/,
            })}
          />
          {errors.workspace_name?.type === "required" && (
            <p className="warning">This is required</p>
          )}
          {errors.workspace_name?.type === "minLength" && (
            <p className="warning">Must have atleast 3 characters.</p>
          )}
          {errors.workspace_name?.type === "maxLength" && (
            <p className="warning">Must have atmost 50 characters.</p>
          )}
          {errors.workspace_name?.type === "pattern" && (
            <p className="warning">
              name must only contains numbers and alphabets.
            </p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Workspace Description</Form.Label>
          <Form.Control
            as="textarea"
            name="workspace_desc"
            id="workspace_desc"
            ref={register}
          />
        </Form.Group>
        <Button id="workspace-details-submit-button" type="submit">
          Update workspace
        </Button>
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
          <Button variant="danger" id="delete-button" onClick={onDelete}>
            Delete
          </Button>
        </Row>
      </Col>
    </div>
  );
};

export default GeneralSettingsComponent;
