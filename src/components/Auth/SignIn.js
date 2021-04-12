import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../utils/Loading/Loading";
import "./Auth.css";
import { toast } from "react-toastify";
import Loading from "../../utils/Loading/Loading";

const SignIn = (props) => {
  const { register, handleSubmit, errors } = useForm({});
  const {
    register: registerEmail,
    handleSubmit: handleEmailSubmit,
    errors: emailErrors,
  } = useForm({});

  const [redirect, setRedirect] = useState(false);
  const [visibility, setVisibilty] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  const username_regex = new RegExp(/^[ A-Za-z0-9]*$/);
  const email_regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const regex = new RegExp(username_regex.source + "|" + email_regex.source);

  /**
   * Display a 3s Toast on the top right corner of the screen
   * @param {string} status - SUCCESS/ ERROR
   * @param {string} message - Text for the Toast Body
   */
  const showToast = (status, message) => {
    if (status === "SUCCESS") toast.success(message, { toastId: "success" });
    else toast.error(message, { toastId: "error" });
  };

  const onSubmit = (loginData) => {
    //TODO: validation submit logic
    props.signInUser(loginData);
  };

  const onEmailSubmit = (email) => {
    props.forgotUserPassword(email);
  };

  if (props.data.error) {
    showToast("ERROR", props.data.error);
  }

  const errorMessage = () => {
    if (props.signIn.error) {
      showToast("ERROR", props.signIn.error);
      props.removeSignInError();
    }
  };

  if (props.data.loading || props.signIn.loading) {
    return <Loading />;
  } else if (props.data.error) {
    return <h2>{props.data.error}</h2>;
  } else if (props.data && props.data.userData) {
    return <Redirect to="/dashboard" />;
  } else {
    return resetPassword ? (
      <div>
        <form
          key={2}
          className="auth-form"
          onSubmit={handleEmailSubmit(onEmailSubmit)}
          style={{ width: "90%", marginTop: "100px" }}
        >
          <div className="d-flex m-3">
            <i
              className="fa fa-arrow-left mt-3 mr-3"
              onClick={() => setResetPassword(false)}
              style={{ cursor: "pointer", color: "white" }}
            />{" "}
            <h1 className="text-center" style={{ color: "white" }}>
              Reset password
            </h1>
          </div>

          {/* Email */}
          <input
            className="auth-input"
            type="text"
            placeholder="Enter Email"
            name="email"
            ref={registerEmail({
              required: true,
              pattern: email_regex,
            })}
          />
          {emailErrors.email && emailErrors.email.type === "required" && (
            <p className="warning">This is required</p>
          )}
          {emailErrors.email && emailErrors.email.type === "pattern" && (
            <p className="warning">Not a valid username or email.</p>
          )}

          {/* Button */}
          <input
            className="auth-input"
            type="submit"
            style={{ marginTop: "20px" }}
          />
        </form>
      </div>
    ) : (
      <div>
        {errorMessage()}
        <form
          key={1}
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
            Forgot password?
            <a
              className="text-info"
              onClick={() => setResetPassword(true)}
              style={{ cursor: "pointer" }}
            >
              Reset here.
            </a>{" "}
          </h6>
        </form>
      </div>
    );
  }
};

export default SignIn;
