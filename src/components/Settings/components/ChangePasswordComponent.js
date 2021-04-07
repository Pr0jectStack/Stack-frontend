import React, { useState, useRef } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

import "./ChangePasswordComponent.css";

const ChangePasswordComponent = (props) => {
  const { register, handleSubmit, errors, watch } = useForm({});

  const [isVisible, setIsVisible] = useState(false);

  const new_password = useRef({});
  new_password.current = watch("new_password", "");

  const old_password = useRef({});
  old_password.current = watch("old_password", "");

  const onSubmit = (changedPassword) => {
    console.log(changedPassword);
    props.changePassword(props.userId, changedPassword);
  };

  return (
    <div style={{width:"95%",margin:"10px"}}>
      <Form onSubmit={handleSubmit(onSubmit)} id="change-password-form">
        <Form.Group>
          <Form.Label id="label">Old password</Form.Label>
          <Col>
            <Row>
              <div className="d-flex" style={{width:"97%"}}>

             
              <Form.Control
                name="password"
                id="old_password"
                type={isVisible ? "text" : "password"}
                ref={register({
                  required: true,
                  minLength: 8,
                })}
                required
                className="text-white"
              />
              <i
                id="eye-toggle-button"
                className={isVisible ? "fa fa-eye" : "fa fa-eye-slash"}
                aria-hidden="true"
                onClick={() => setIsVisible(!isVisible)}
                style={{backgroundColor:"inherit",padding:"10px",marginLeft:"-40px"}}
              />
               </div>
            </Row>
          </Col>
          {errors.old_password && errors.old_password.type === "required" && (
            <p className="warning">This is required</p>
          )}
          {errors.old_password && errors.old_password.type === "minLength" && (
            <p className="warning">Must have atleast 8 characters.</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">New password</Form.Label>
          <Col>
            <Row>
              <div className="d-flex" style={{width:"97%"}}>
              <Form.Control
                name="new_password"
                id="new_password"
                type={isVisible ? "text" : "password"}
                ref={register({
                  required: true,
                  minLength: 8,
                  validate: (value) =>
                    value !== old_password.current ||
                    "New password cannot be equal to the Old password",
                })}
                required
                className="text-white"
              />
              <i
                id="eye-toggle-button"
                className={isVisible ? "fa fa-eye" : "fa fa-eye-slash"}
                aria-hidden="true"
                onClick={() => setIsVisible(!isVisible)}
                style={{backgroundColor:"inherit",padding:"10px",marginLeft:"-40px"}}
              />
               </div>
            </Row>
          </Col>
          {errors.new_password && errors.new_password.type === "required" && (
            <p className="warning">This is required</p>
          )}
          {errors.new_password && errors.new_password.type === "minLength" && (
            <p className="warning">Must have atleast 8 characters.</p>
          )}
          {errors.new_password && errors.new_password.type === "validate" && (
            <p className="warning">{errors.new_password.message}</p>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label id="label">Confirm new password</Form.Label>
          <Col>
            <Row>
            <div className="d-flex" style={{width:"97%"}}>
              <Form.Control
                name="confirm_new_password"
                id="confirm_new_password"
                type={isVisible ? "text" : "password"}
                ref={register({
                  required: true,
                  minLength: 8,
                  validate: (value) =>
                    value === new_password.current ||
                    "The passwords do not match",
                })}
                required
                className="text-white"
              />
              <i
                id="eye-toggle-button"
                className={isVisible ? "fa fa-eye" : "fa fa-eye-slash"}
                aria-hidden="true"
                onClick={() => setIsVisible(!isVisible)}
                style={{backgroundColor:"inherit",padding:"10px",marginLeft:"-40px"}}
              />
              </div>
            </Row>
          </Col>
          {errors.confirm_new_password &&
            errors.confirm_new_password.type === "required" && (
              <p className="warning">This is required</p>
            )}
          {errors.confirm_new_password &&
            errors.confirm_new_password.type === "minLength" && (
              <p className="warning">Must have atleast 8 characters.</p>
            )}
          {errors.confirm_new_password &&
            errors.confirm_new_password.type === "validate" && (
              <p className="warning">{errors.confirm_new_password.message}</p>
            )}
        </Form.Group>
        <Button id="submit-button" type="submit">
          Update password
        </Button>
      </Form>
    </div>
  );
};

export default ChangePasswordComponent;
