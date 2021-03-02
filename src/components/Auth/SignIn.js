import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import "./Validation";

const SignIn = (props) => {
  // console.warn(props.data.login_details);

  const { setLoginDetailsHandler } = props;

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name) => (event) => {
    setError({ ...error, [name]: "" });
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      event.target.className += " was-validated";
      setLoginDetailsHandler(values);
    }
  };

  const validate = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let flag = true;
    if (password.length < 8) {
      setError({
        ...error,
        password: "Password must be at-least of 8 characters.",
      });
      flag = false;
    }
    if (!re.test(email)) {
      setError({ ...error, email: "Enter valid email" });
      flag = false;
    }
    if (!flag) {
      return false;
    } else {
      return true;
    }
  };

  const { email, password } = values;

  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-sm-12 mx-auto">
          <MDBContainer className="">
            <MDBRow>
              <MDBCol md="6" sm="12" className="mx-auto border mt-5 shadow">
                <form
                  className="py-5 needs-validation"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <h1 className="text-center mb-4">Sign in</h1>
                  <div className="grey-text">
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      className={error.email ? "is-invalid" : ""}
                      name="email"
                      onChange={handleChange("email")}
                      error="wrong"
                      value={email}
                      success="right"
                      required
                    >
                      <div className="invalid-feedback">{error.email}</div>
                      <div className="valid-feedback">Looks good!</div>
                    </MDBInput>

                    <MDBInput
                      label={"Your password"}
                      icon="lock"
                      className={error.password ? "is-invalid" : ""}
                      group
                      type="password"
                      name="password"
                      onChange={handleChange("password")}
                      value={password}
                      required
                    >
                      <div className="invalid-feedback">{error.password}</div>
                      <div className="valid-feedback">Looks good!</div>
                    </MDBInput>
                  </div>
                  <div className="text-center">
                    <MDBBtn color="primary" type="submit">
                      Log In
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
