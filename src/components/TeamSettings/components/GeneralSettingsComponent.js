import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import { useForm } from "react-hook-form";
import "./GeneralSettingsComponent.css";

const GeneralSettingsComponent = (props) => {
  const { tid, name } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      team_name: name,
    },
  });

  const onSubmit = ({ team_name }) => {
    const data = {
      tid: tid,
      name: team_name,
    };
    props.updateTeamDetails(data);
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
      <Form id="team-details-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label id="label">Team Name</Form.Label>
          <Form.Control
            name="team_name"
            id="team_name"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 50,
              pattern: /^[ A-Za-z0-9]*$/,
            })}
          />
          {errors.team_name?.type === "required" && (
            <p className="warning">This is required</p>
          )}
          {errors.team_name?.type === "minLength" && (
            <p className="warning">Must have atleast 3 characters.</p>
          )}
          {errors.team_name?.type === "maxLength" && (
            <p className="warning">Must have atmost 50 characters.</p>
          )}
          {errors.team_name?.type === "pattern" && (
            <p className="warning">
              name must only contains numbers and alphabets.
            </p>
          )}
        </Form.Group>
        <Button id="team-details-submit-button" type="submit">
          Update team
        </Button>
      </Form>

      <h4 id="danger-zone-heading">Danger Zone</h4>
      <Col>
        <Row id="danger-zone-box">
          <Col className="pl-1">
            <h5 id="danger-info-heading">Delete Team</h5>
            <h6 id="danger-info-subtitle">
              This action will permanently delete the team.
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
