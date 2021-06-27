import React from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";

const CreateWorkspace = (props) => {
  const { data, addNewWorkspace } = props;
  const userId = data.userData._id;

  const { register, handleSubmit, errors } = useForm({});

  const onSubmit = (data) => {
    data.owner = userId;
    addNewWorkspace(data);
    
  };

  const checkIfWorkSpaceExists = (value) => {
    //TODO
  };
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  if (data.loading) {
    // FIXME: CANNOT REDIRECT
    return <Redirect to="/dashboard" />;
  } else if (data.error) {
    return <h2>{data.error}</h2>;
  } else
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
                  minLength: 3,
                  maxLength: 50,
                  pattern: /^[ A-Za-z0-9]*$/,
                  validate: async (value) => {
                    await sleep(1000);
                    return checkIfWorkSpaceExists(value);
                  },
                })}
              />
              {errors.name?.type === "required" && (
                <p className="warning">This is required</p>
              )}
              {errors.name?.type === "minLength" && (
                <p className="warning">Must have atleast 3 characters.</p>
              )}
              {errors.name?.type === "maxLength" && (
                <p className="warning">Must have atmost 50 characters.</p>
              )}
              {errors.name?.type === "pattern" && (
                <p className="warning">
                  name must only contains numbers and alphabets.
                </p>
              )}
              {errors.name?.type === "validate" && (
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
                </a>
                and cookie usage.
              </h6>
            </form>
          </div>
        </main>
      </div>
    );
};

export default CreateWorkspace;
