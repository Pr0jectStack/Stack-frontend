import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./Auth.css";

const ForgotPassword = ({ props, setResetPassword }) => {
  const { register, handleSubmit, errors } = useForm({});

  const email_regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  /**
   * Display a 3s Toast on the top right corner of the screen
   * @param {string} status - SUCCESS/ ERROR
   * @param {string} message - Text for the Toast Body
   */
  const showToast = (status, message) => {
    if (status === "SUCCESS") toast.success(message, { toastId: "success" });
    else toast.error(message, { toastId: "error" });
  };

  const onSubmit = (email) => {
    props.forgotUserPassword(email);
  };

  if (props.signIn.error) {
    showToast("ERROR", "Invalid Email");
    props.removeSignInError();
  }

  if (props.signIn.userData) {
    showToast("SUCCESS", props.signIn.userData);
    props.removeSignInError();
    setResetPassword(false);
  }

  return (
    <div>
      <form
        key={2}
        className="auth-form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "90%", marginTop: "100px" }}
      >
        <div className="d-flex m-3">
          <i
            className="fa fa-arrow-left mt-3 mr-3"
            onClick={() => setResetPassword(false)}
            style={{ cursor: "pointer", color: "white" }}
          />{" "}
          <h1 className="text-center" style={{ color: "white" }}>
            Forgot password
          </h1>
        </div>

        {/* Email */}
        <input
          className="auth-input"
          type="text"
          placeholder="Enter Email"
          name="email"
          ref={register({
            required: true,
            pattern: email_regex,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p className="warning">This is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
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
  );
};

export default ForgotPassword;
