import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from "react-router-dom";
// import {useHistory} from "history";

const CreateTeam = (props) => {
  /**
   * Take currentWorkspace data and personal data from Workspace and profile respectively
   * Match if user is allowed to create team
   * Then call add Team
   */
  let history = useHistory();

  console.log(props);
  const { profileData, workspaceData, addNewTeam } = props;
  const userId = profileData._id;
  const ownerId = workspaceData.currentWorkspace.owner;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, errors, watch } = useForm({});

  const onSubmit = (data) => {
    // data.owner=userId;

    // Extract Team leader information from currentWorkspace
    const teamLeader = props.workspaceData.currentWorkspace.members.filter(
      (m) => m.username === data.teamLeader || m.email === data.teamLeader
    );
    data.teamLeader = teamLeader.length > 0 ? teamLeader[0]._id : "";

    console.log(data);

    let done = false;
    if (profileData._id === ownerId) {
      data.owner = userId;
      data.wid = workspaceData.currentWorkspace._id;
      data.inviteLink = "sasaaassa";
      addNewTeam(data);
      done = true;
      if (!workspaceData.loading && done) {
        setSuccess(true);
      }
    } else {
      setError("Not Authorized!");
      // console.log("Not authorize!")
    }
  };

  const location = (wid) => {
    return {
      pathname: "/dashboard/workspace" + "/" + wid,
    };
  };

  const checkIfTeamExists = (value) => {
    //TODO
  };
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const memberExists = (member) => {
    return (
      member === null ||
      member.length === 0 ||
      props.workspaceData.currentWorkspace.members.filter(
        (m) => m.username === member || m.email === member
      ).length > 0
    );
  };

  if (!workspaceData.loading && success) {
    return <Redirect to={location(workspaceData.currentWorkspace._id)} />;
  } else if (profileData.error) {
    return <h2>{profileData.error}</h2>;
  } else
    return (
      <div className="mx-auto mb-5" id="outer-container">
        <main id="page-wrap">
          <div style={{ marginTop: "100px" }}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ maxWidth: "90%", width: "550px", margin: "auto" }}
            >
              <h1 className="auth-h1 mb-5">Create Team</h1>

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
                placeholder="Team name"
                name="name"
                ref={register({
                  required: true,
                  minLength: 3,
                  maxLength: 50,
                  pattern: /^[ A-Za-z0-9]*$/,
                  validate: async (value) => {
                    await sleep(1000);
                    return checkIfTeamExists(value);
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
                <p className="warning">Team already exists.</p>
              )}

              {/* Team Leader */}
              <input
                className="auth-input"
                type="text"
                placeholder="Team Leader"
                name="teamLeader"
                ref={register({
                  validate: memberExists,
                })}
              />
              {errors.teamLeader && errors.teamLeader.type === "validate" && (
                <p className="warning">User is not a part of this workspace.</p>
              )}

              {/* Invite Link */}
              {/* <input
                className="auth-input"
                type="text"
                placeholder="Invite link"
                name="inviteLink"
                ref={register({
                  required: true,
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="warning">This is required</p>
              )} */}

              {/* Button */}
              <input
                className="auth-input"
                type="submit"
                style={{ marginTop: "20px" }}
              />

              {/* Terms and Conditions */}
              <h6 className="text-light mt-1">
                By creating a team, you agree to our{" "}
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

export default CreateTeam;
