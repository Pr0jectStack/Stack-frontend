import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";

const AddNewMembersUtil = (props) => {
  const profile = props.profileData;
  const workspace = props.workspaceData.currentWorkspace;
  const membersInWorkspace =
    workspace && workspace.members ? workspace.members : null;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [member, setMember] = useState("");
  const [members, setMembers] = useState([]);

  const { handleSubmit } = useForm({});

  const onSubmit = (data) => {
    if (members.length > 0 && props.type === "workspace") {
      data.members = members;
      data.userId = profile._id;
      data.wid = props.id;
      console.log("DATA: ", data);
      props.addMembersToWorkspace(data);
    }
    if (members.length > 0 && props.type === "team") {
      data.members = members;
      data.userId = profile._id;
      data.tid = props.id;
      data.wid = workspace._id;
      props.addMembersToTeam(data);
    }

    /** WHEN SUCCESSFUL CLOSE THE MODAL */
    props.closeModal();
  };

  const checkIfWorkSpaceExists = (value) => {
    //TODO:
  };
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const showBadges =
    members.length > 0 &&
    members.map((member) => {
      return (
        <Col md="12  mb-2" lg="auto">
          <p
            className="bg-light p-2 text-dark text-center"
            style={{ borderRadius: "15px", fontSize: "13px" }}
          >
            {member}
          </p>
        </Col>
      );
    });

  const addMember = () => {
    if (member !== "" && props.type === "workspace") {
      setMembers([...members, member]);
      setMember("");
    }
    if (member !== "" && props.type === "team") {
      if (allowed(member)) {
        setMembers([...members, member]);
        setMember("");
        setError("");
        setSuccess(member + " is added to the team.");
        setMember("");
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      } else {
        setSuccess("");
        setError(member + " is not a part of this workspace");
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }
  };

  const allowed = (member) => {
    for (let i = 0; i < membersInWorkspace.length; i++) {
      if (
        membersInWorkspace[i].username === member ||
        membersInWorkspace[i].email === member
      ) {
        return true;
      }
    }
    return false;
  };

  const successMessage = () => {
    if (success !== "") {
      return (
        <div className="row">
          <div className="col-md-12 offset">
            <div className="alert alert-success">
              <i class="fa fa-check" aria-hidden="true"></i>
              {"  "}
              {success}
            </div>
          </div>
        </div>
      );
    }
  };

  const errorMessage = () => {
    if (error !== "") {
      return (
        <div className="row">
          <div className="col-md-12 offset">
            <div className="alert alert-danger">
              <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
              {"  "}
              {error}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="mx-auto my-5" id="outer-container">
      <main id="page-wrap">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ maxWidth: "95%", width: "550px", margin: "auto" }}
          >
            {errorMessage()}
            {successMessage()}
            <div
              className="d-flex bg-white"
              style={{
                borderRadius: "4px",
                marginBottom: "10px",
                height: "50px",
              }}
            >
              <input
                className="auth-input"
                type="text"
                placeholder="Add member"
                name="member"
                value={member}
                onChange={(e) => setMember(e.target.value)}
                style={{ outline: "none", paddingTop: "5%" }}
              />
              <i
                style={{ fontSize: "20px", color: "black" }}
                className="fa fa-plus my-auto mx-2"
                aria-hidden="true"
                onClick={() => addMember()}
              />
            </div>

            <Row className="mt-3">{showBadges}</Row>

            {/* Button */}
            <input
              className="auth-input"
              type="submit"
              style={{ marginTop: "20px" }}
            />
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddNewMembersUtil;
