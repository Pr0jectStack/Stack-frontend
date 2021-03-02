import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import "./Validation";
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

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name) => (event) => {
    setError({ ...error, [name]: "" });
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      event.target.className += " was-validated";
    }
    // setLoginDetailsHandler(values);
  };

  const validate = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      setError({ ...error, email: "Enter valid email" });
      return false;
    }
    if (password.length >= 8) {
      if (firstName.length >= 3) {
        if (confirmPassword === password) {
          return true;
        } else {
          setError({ ...error, confirmPassword: "Passwords do not match." });
          return false;
        }
      } else {
        setError({
          ...error,
          firstName: "Firstname must be of atleast 3 characters",
        });
        return false;
      }
    } else {
      setError({
        ...error,
        password: "Password must be at-least of 8 characters.",
      });
      return false;
    }
  };

  const { firstName, lastName, email, password, confirmPassword } = values;

  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="mx-auto border mt-5 shadow">
            <form
              className="my-5 needs-validation"
              onSubmit={handleSubmit}
              noValidate
            >
              <h1 className="text-center mb-4">Sign up</h1>
              <div className="grey-text">
                <MDBInput
                  label="First name"
                  icon="user"
                  group
                  type="text"
                  error="wrong"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange("firstName")}
                  success="right"
                  required
                  className={error.firstName ? "is-invalid" : ""}
                >
                  <div className="invalid-feedback">{error.firstName}</div>
                  {/* <div className="valid-feedback">Looks good!</div> */}
                </MDBInput>
                <MDBInput
                  label="Last name"
                  icon="user"
                  group
                  type="text"
                  error="wrong"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange("lastName")}
                  success="right"
                  required
                  className={error.lastName ? "is-invalid" : ""}
                >
                  <div className="invalid-feedback">{error.lastName}</div>
                  {/* <div className="valid-feedback">Looks good!</div> */}
                </MDBInput>
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  name="email"
                  onChange={handleChange("email")}
                  error="wrong"
                  value={email}
                  success="right"
                  required
                  className={error.email ? "is-invalid" : ""}
                >
                  <div className="invalid-feedback">{error.email}</div>
                  {/* <div className="valid-feedback">Looks good!</div> */}
                </MDBInput>
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  name="password"
                  onChange={handleChange("password")}
                  value={password}
                  required
                  className={error.password ? "is-invalid" : ""}
                >
                  <div className="invalid-feedback">{error.password}</div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
                <MDBInput
                  label="Confirm password"
                  icon="lock"
                  group
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange("confirmPassword")}
                  value={confirmPassword}
                  required
                  className={error.confirmPassword ? "is-invalid" : ""}
                >
                  <div className="invalid-feedback">
                    {error.confirmPassword}
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
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
