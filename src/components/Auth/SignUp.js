import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Auth.css";
import { checkUserExists } from "./helper";
import { toast } from "react-toastify";

const SignUp = (props) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, errors, watch } = useForm({
    // mode: "onChange",
  });

  // ! TODO: COMPLETE IMPLEMENTATION OF REDUX !!

  const [visibility, setVisibilty] = useState({
    password: false,
    confirmPassword: false,
  });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (signUpData) => {
    delete signUpData.confirmPassword;
    props.signUpUser(signUpData);
  };

  const checkIfUserExists = (value) => {
    checkUserExists(value).then((data) => {
      if (!data || data.error) {
        // console.log("False must be returned");
        return false;
      } else {
        return true;
      }
    });
  };

  const showToast = (status, message) => {
    if (status == "SUCCESS") toast.success(message, { toastId: "success" });
    else toast.error(message, { toastId: "error" });
  };

  const message = () => {
    if (props.data.userData) {
      showToast("SUCCESS", props.data.userData);
      props.updateSignUpUserData();
    } else if (props.data.error) {
      showToast("ERROR", props.data.error);
      props.updateSignUpUserData();
    }
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const validateEmail = (value) => {
    const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(value.toLowerCase());
  };
  return (
    <div>
      {message()}
      <form
        className="auth-form"
        onSubmit={handleSubmit(onSubmit)}
        // style={{ width: "90%", marginTop: "100px" }}
        style={{
          maxWidth: "90%",
          width: "480px",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        <h1 className="auth-h1">Create Account</h1>
        <h6 className="text-white mb-5 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-info">
            Sign in
          </Link>
        </h6>

        <div className="d-flex">
          {/* FirstName */}
          <input
            className="auth-input"
            id="First Name"
            type="text"
            placeholder="First name"
            name="firstName"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 25,
              pattern: /^[ A-Za-z]*$/,
            })}
            style={{ marginRight: "10px" }}
          />

          {/* LastName */}
          <input
            className="auth-input"
            type="text"
            placeholder="Last name"
            name="lastName"
            ref={register({ pattern: /^[ A-Za-z]*$/ })}
          />
        </div>

        {errors.firstName && errors.firstName.type === "required" && (
          <p className="warning">This is required</p>
        )}
        {errors.firstName && errors.firstName.type === "minLength" && (
          <p className="warning">Must have atleast 3 characters.</p>
        )}
        {((errors.firstName && errors.firstName.type === "pattern") ||
          (errors.lastName && errors.lastName.type === "pattern")) && (
          <p className="warning">Name must only contains alphabets.</p>
        )}

        {/* Username */}
        <input
          className="auth-input"
          type="text"
          placeholder="Username"
          name="username"
          ref={register({
            required: true,
            minLength: 5,
            maxLength: 15,
            pattern: /^[ A-Za-z0-9]*$/,
            validate: async (value) => {
              await sleep(1000);
              return checkIfUserExists(value);
            },
          })}
        />
        {errors.username && errors.username.type === "required" && (
          <p className="warning">This is required</p>
        )}
        {errors.username && errors.username.type === "minLength" && (
          <p className="warning">Must have atleast 5 characters.</p>
        )}
        {errors.username && errors.username.type === "maxLength" && (
          <p className="warning">Must have atmost 12 characters.</p>
        )}
        {errors.username && errors.username.type === "pattern" && (
          <p className="warning">
            Username must only contains numbers and alphabets.
          </p>
        )}
        {errors.username && errors.username.type === "validate" && (
          <p className="warning">
            Username or email already exists in our datatbase.
          </p>
        )}

        {/* Email */}
        <input
          className="auth-input"
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, validate: validateEmail })}
        />
        {errors.email && errors.email.type === "required" && (
          <p className="warning">This is required</p>
        )}
        {errors.email && errors.email.type === "validate" && (
          <p className="warning">Enter a valid email.</p>
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
            type={visibility.password ? "text" : "password"}
            placeholder="Password"
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
          <p className="warning">This is required</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p className="warning">Must have atleast 8 characters.</p>
        )}

        {/* Confirm Password */}
        <div
          className="d-flex bg-white"
          style={{ borderRadius: "4px", height: "45px", height: "50px" }}
        >
          <input
            className="auth-input"
            type={visibility.confirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
            ref={register({
              required: true,
              minLength: 8,
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
            style={{ outline: "none", paddingTop: "4%" }}
          />
          <i
            style={{ fontSize: "20px", color: "black" }}
            className={
              !visibility.confirmPassword
                ? "fa fa-eye-slash my-auto mx-2"
                : "fa fa-eye my-auto mx-2"
            }
            aria-hidden="true"
            onClick={() =>
              setVisibilty({
                ...visibility,
                confirmPassword: !visibility.confirmPassword,
              })
            }
          ></i>
        </div>
        {errors.confirmPassword &&
          errors.confirmPassword.type === "required" && (
            <p className="warning">This is required</p>
          )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "minLength" && (
            <p className="warning">Must have atleast 8 characters.</p>
          )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "validate" && (
            <p className="warning">{errors.confirmPassword.message}</p>
          )}

        {/* Button */}
        <input
          className="auth-input"
          type="submit"
          style={{ marginTop: "20px" }}
        />

        {/* Terms and Conditions */}
        <h6 className="text-light mt-1">
          By creating an account, you agree to our{" "}
          <a herf="#" className="text-info">
            Terms and Conditions
          </a>{" "}
          and cookie usage.
        </h6>
      </form>
    </div>
  );
};

export default SignUp;
