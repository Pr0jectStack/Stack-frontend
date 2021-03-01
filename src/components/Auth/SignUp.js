import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

const SignUp = (props) => {
  // console.warn(props.data.login_details);

  const { setLoginDetailsHandler } = props;

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginDetailsHandler(values);
  };

  const { firstName, lastName, email, password, confirmPassword } = values;

  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="mx-auto">
            <form className="my-5" onSubmit={handleSubmit}>
              <h1 className="text-center mb-4">Sign up</h1>
              <div className="grey-text">
                <MDBInput
                  label="First name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange("firstName")}
                  success="right"
                />
                <MDBInput
                  label="Last name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange("lastName")}
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  name="email"
                  onChange={handleChange("email")}
                  error="wrong"
                  value={email}
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  name="password"
                  onChange={handleChange("password")}
                  value={password}
                  validate
                />
                <MDBInput
                  label="Confirm password"
                  icon="lock"
                  group
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange("confirmPassword")}
                  value={confirmPassword}
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn color="primary" type="submit">
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default SignUp;
