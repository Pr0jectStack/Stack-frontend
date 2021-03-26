import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./ChangePasswordComponent.css";

// ! TODO: Add Functionality

const ChangePasswordComponent = (props) => {
  return (
    <div>
      <Form id="change-password-form">
        <Form.Group>
          <Form.Label id="label">Old password</Form.Label>
          <Form.Control name="password" id="old_password" />
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">New password</Form.Label>
          <Form.Control name="new_password" id="new_password" />
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Confirm new password</Form.Label>
          <Form.Control name="confirm_new_password" id="confirm_new_password" />
        </Form.Group>
        <Button id="submit-button" type="submit">
          Update password
        </Button>
      </Form>
    </div>
  );
};

export default ChangePasswordComponent;
