import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CreateWorkspace = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, errors, watch } = useForm({});

  const onSubmit = (data) => {
    //TODO:
  };

  const checkIfWorkSpaceExists = (value) => {
    //TODO
  };
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  // if (props.data.loading) {
  //   return <h2> Loading...</h2>;
  // } else if (props.data.error) {
  //   return <h2>{props.data.error}</h2>;
  // } else if (props.data && props.data.userData === null) {
  //   return <Redirect to="/" />;
  // } else
  return (
    <div className="mx-auto mb-5" id="outer-container">
        <main id="page-wrap">
    <div style={{ marginTop: "100px" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "90%", width: "550px", margin: "auto" }}
      >
        <h1 className="auth-h1 mb-5">Create Workspace</h1>

        <Link
          to="/dashboard"
          className="btn btn-info mb-3"
          style={{ backgroundColor: "#151829", borderColor: "#ec5990" }}
        >
          {" "}
          <i
            style={{ fontSize: "16px", paddingRight: "5px" }}
            className="fa fa-arrow-left"
            aria-hidden="true"
          ></i>
          {"  "}Back
        </Link>
        {/* Description */}
        <input
          className="auth-input"
          type="text"
          placeholder="Workspace name"
          name="name"
          ref={register({
            required: true,
            minLength: 5,
            maxLength: 15,
            pattern: /^[ A-Za-z0-9]*$/,
            validate: async (value) => {
              await sleep(1000);
              return checkIfWorkSpaceExists(value);
            },
          })}
        />
        {errors.name && errors.name.type === "required" && (
          <p className="warning">This is required</p>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <p className="warning">Must have atleast 5 characters.</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p className="warning">Must have atmost 12 characters.</p>
        )}
        {errors.name && errors.name.type === "pattern" && (
          <p className="warning">
            name must only contains numbers and alphabets.
          </p>
        )}
        {errors.name && errors.name.type === "validate" && (
          <p className="warning">Workspace already exists.</p>
        )}

        {/* Description */}
        <textarea
          className="auth-input"
          placeholder="Description"
          name="description"
          rows="5"
          ref={register}
        />

        {/* Button */}
        <input
          className="auth-input"
          type="submit"
          style={{ marginTop: "20px" }}
        />

        {/* Terms and Conditions */}
        <h6 className="text-light mt-1">
          By creating a workspace, you agree to our{" "}
          <a herf="#" className="text-info">
            Terms and Conditions
          </a>{" "}
          and cookie usage.
        </h6>
      </form>
    </div>
    </main>
    </div>
  );
};

export default CreateWorkspace;
