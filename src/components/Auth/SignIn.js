import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "./Auth.css";

const SignIn = (props) => {
  // console.warn(props.data.login_details);
  const { register, handleSubmit, errors } = useForm({});

  const [visibility, setVisibilty] = useState({
    password: false,
  });

  const { setLoginDetailsHandler } = props;

  const onSubmit = (data) => {
    //TODO: validation submit logic
    console.log(data);
  };

  const validateUserNameOrEmail = (value) => {
    const username_regex = /^[ A-Za-z0-9]*$/;
    const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return username_regex.test(value) || email_regex.test(value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "90%" }}>
        <h1 className="mt-3">Sign In</h1>
        <h6 className="text-white mb-5 text-center">
          Do not have an account?{" "}
          <a href="/signup" className="text-info">
            Sign Up
          </a>
        </h6>

        {/* Username */}
        <input
          type="text"
          placeholder="username or email"
          name="username_email"
          ref={register({
            required: true,
            validate: validateUserNameOrEmail,
          })}
        />
        {errors.username_email && errors.username_email.type === "required" && (
          <p>This is required</p>
        )}
        {errors.username_email && errors.username_email.type === "validate" && (
          <p>Not a valid username or email.</p>
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
            type={visibility.password ? "text" : "password"}
            placeholder="password"
            name="password"
            ref={register({ required: true, minLength: 8 })}
            style={{ outline: "none", paddingTop: "4%" }}
          />
          <i
            style={{ fontSize: "20px", color: "black" }}
            className={
              !visibility.password
                ? "fa fa-eye-slash my-auto mx-2"
                : "fa fa-eye my-auto mx-2"
            }
            aria-hidden="true"
            onClick={() =>
              setVisibilty({
                ...visibility,
                password: !visibility.password,
              })
            }
          ></i>
        </div>
        {errors.password && errors.password.type === "required" && (
          <p>This is required</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>Must have atleast 8 characters.</p>
        )}

        {/* Button */}
        <input type="submit" style={{ marginTop: "20px" }} />

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
