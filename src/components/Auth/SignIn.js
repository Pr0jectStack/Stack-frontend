import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect,Link } from "react-router-dom";
import "./Auth.css";

const SignIn = (props) => {
  const { register, handleSubmit, errors } = useForm({});

  const [redirect, setRedirect] = useState(false);
  const [visibility, setVisibilty] = useState(false);

  const onSubmit = (loginData) => {
    //TODO: validation submit logic
    props.signInUser(loginData);
  };

  const username_regex = new RegExp(/^[ A-Za-z0-9]*$/);
  const email_regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const regex = new RegExp(username_regex.source + "|" + email_regex.source);

  if (props.data.loading) {
    return <h2> Loading...</h2>;
  } else if (props.data.error) {
    return <h2>{props.data.error}</h2>;
  } else if (props.data && props.data.userData) {
    return <Redirect to="/dashboard" />;
  } else
    return (
      <div>
        <form
          className="auth-form"
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "90%", marginTop: "100px" }}
        >
          <h1 className="auth-h1">Sign In</h1>
          <h6 className="text-white mb-5 text-center">
            Do not have an account?{" "}
            <Link to="/signup" className="text-info">
              Sign Up
            </Link>
          </h6>

          {/* Username */}
          <input
            className="auth-input"
            type="text"
            placeholder="username or email"
            name="username_email"
            ref={register({
              required: true,
              pattern: regex,
            })}
          />
          {errors.username_email &&
            errors.username_email.type === "required" && (
              <p className="warning">This is required</p>
            )}
          {errors.username_email &&
            errors.username_email.type === "pattern" && (
              <p className="warning">Not a valid username or email.</p>
            )}

          {/* Password */}
          <div
            className="d-flex bg-white"
            style={{
              borderRadius: "4px",
              height: "45px",
              marginBottom: "10px",
              height: "50px",
            }}
          >
            <input
              className="auth-input"
              type={visibility ? "text" : "password"}
              placeholder="password"
              name="password"
              ref={register({ required: true, minLength: 8 })}
              style={{ outline: "none", paddingTop: "4%" }}
            />
            <i
              style={{ fontSize: "20px", color: "black" }}
              className={
                !visibility
                  ? "fa fa-eye-slash my-auto mx-2"
                  : "fa fa-eye my-auto mx-2"
              }
              aria-hidden="true"
              onClick={() => setVisibilty(!visibility)}
            />
          </div>
          {errors.password && errors.password.type === "required" && (
            <p className="warning">This is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="warning">Must have atleast 8 characters.</p>
          )}

          {/* Button */}
          <input
            className="auth-input"
            type="submit"
            style={{ marginTop: "20px" }}
          />

          {/* Terms and Conditions */}
          <h6 className="text-light mt-1">
            Forgot password?{" "}
            <a herf="#" className="text-info">
              reset here.
            </a>{" "}
          </h6>
        </form>
      </div>
    );
};

export default SignIn;
