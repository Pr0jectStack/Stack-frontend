import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Validation";
const SignUp = (props) => {
  // console.warn(props.data.login_details);

  // const { setLoginDetailsHandler } = props;

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
    passwordVisibility: false,
    confirmPasswordVisibility: false,
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: "",
    username: "",
  });

  const handleChange = (name) => (event) => {
    setError({ ...error, [name]: "" });
    if (name === "termsAndConditions") {
      setValues({ ...values, [name]: ![name] });
    }
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
    if (password.length >= 8) {
      if (firstName.length >= 3) {
        if (!re.test(email)) {
          setError({ ...error, email: "Enter valid email" });
          return false;
        } else {
          if (confirmPassword === password) {
            if (termsAndConditions) {
              if (username.length >= 3) {
                return true;
              } else {
                setError({
                  ...error,
                  username: "Username must be atlease 3 characters long",
                });
                return false;
              }
            } else {
              setError({
                ...error,
                termsAndConditions: "Accept terms and conditions",
              });
              return false;
            }
          } else {
            setError({ ...error, confirmPassword: "Passwords do not match." });
            return false;
          }
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
        password: "Password must be atleast of 8 characters.",
      });
      return false;
    }
  };

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    termsAndConditions,
    passwordVisibility,
    confirmPasswordVisibility,
    username,
  } = values;

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol
          md="6"
          className="mx-auto border mt-5 shadow"
          style={{
            borderRadius: "20px",
            width: "100%",
            padding: "40px 80px",
          }}
        >
          <form className="needs-validation" onSubmit={handleSubmit} noValidate>
            <h1
              className="text-center mb-4"
              style={{ fontSize: "6vh", fontWeight: "600" }}
            >
              Sign up
            </h1>
            <div className="grey-text">
              <MDBRow>
                <MDBCol md="12" lg="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    First name
                  </label>
                  <input
                    value={firstName}
                    name="firstName"
                    onChange={handleChange("firstName")}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    placeholder="John"
                    required
                    className={
                      error.firstName
                        ? "form-control is-invalid p-4"
                        : "form-control p-4"
                    }
                  />
                  <div className="invalid-feedback">{error.firstName}</div>
                </MDBCol>

                <MDBCol md="12" lg="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Last name
                  </label>
                  <input
                    value={lastName}
                    name="lastName"
                    onChange={handleChange("lastName")}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    placeholder="Doe"
                    className={
                      error.lastName
                        ? "form-control is-invalid p-4"
                        : "form-control p-4"
                    }
                  />
                  <div className="invalid-feedback">{error.lastName}</div>
                </MDBCol>
              </MDBRow>
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text mt-2"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                onChange={handleChange("username")}
                error="wrong"
                value={username}
                success="right"
                required
                placeholder="johndoe"
                className={
                  error.username
                    ? "form-control is-invalid p-4"
                    : "form-control p-4"
                }
              />
              <div className="invalid-feedback">{error.username}</div>
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text mt-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange("email")}
                error="wrong"
                value={email}
                success="right"
                required
                placeholder="john@doe.com"
                className={
                  error.email
                    ? "form-control is-invalid p-4"
                    : "form-control p-4"
                }
              />
              <div className="invalid-feedback">{error.email}</div>

              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text mt-2"
              >
                Password
              </label>
              <div className="d-flex my-auto mx-auto">
                <input
                  type={!passwordVisibility ? "password" : "text"}
                  name="password"
                  onChange={handleChange("password")}
                  value={password}
                  required
                  placeholder="Password"
                  className={
                    error.password
                      ? "form-control is-invalid p-4"
                      : "form-control p-4"
                  }
                />
                <i
                  style={{ fontSize: "20px" }}
                  className={
                    passwordVisibility
                      ? "fa fa-eye-slash my-auto mx-2"
                      : "fa fa-eye my-auto mx-2"
                  }
                  aria-hidden="true"
                  onClick={() =>
                    setValues({
                      ...values,
                      passwordVisibility: !passwordVisibility,
                    })
                  }
                />
                <div className="invalid-feedback">{error.password}</div>
              </div>

              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text mt-2"
              >
                Confirm Password
              </label>
              <div className="d-flex ">
                <input
                  label="Confirm password"
                  group
                  type={!confirmPasswordVisibility ? "password" : "text"}
                  name="confirmPassword"
                  onChange={handleChange("confirmPassword")}
                  value={confirmPassword}
                  required
                  placeholder="Password"
                  className={
                    error.confirmPassword
                      ? "form-control is-invalid p-4"
                      : "form-control p-4"
                  }
                />
                <i
                  style={{ fontSize: "20px" }}
                  className={
                    confirmPasswordVisibility
                      ? "fa fa-eye-slash my-auto mx-2"
                      : "fa fa-eye my-auto mx-2"
                  }
                  aria-hidden="true"
                  onClick={() =>
                    setValues({
                      ...values,
                      confirmPasswordVisibility: !confirmPasswordVisibility,
                    })
                  }
                />
                <div className="invalid-feedback">{error.confirmPassword}</div>
              </div>
            </div>
            <div className="mt-3">
              <input
                type="checkbox"
                id="defaultUnchecked"
                required
                className={error.termsAndConditions ? "is-invalid" : ""}
                onChange={handleChange("termsAndConditions")}
              />
              <label className="pl-2" for="defaultUnchecked">
                I agree to the&nbsp;
                <a href="#!" className=" font-weight-bold">
                  Terms and Conditions.
                </a>
              </label>
              <div className="invalid-feedback">{error.termsAndConditions}</div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-block btn-primary mt-3 mb-2 text-center"
                type="submit"
                style={{ fontSize: "19px" }}
              >
                Sign up
                <i
                  style={{ float: "right" }}
                  className="fa fa-arrow-right my-2 "
                  aria-hidden="true"
                />
              </button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;
