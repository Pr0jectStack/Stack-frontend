import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import CardItems from "./CardItems";
import "./Landing.css";

const Landing = ({
  heading,
  type,
  _id,
  data,
  userId,
  openItem,
  goBack,
  ownerId = "",
  teamLeader = "",
  getWorkspaceById,
  getTeamById,
  showMembers,
  setShowMembers,
  deleteWorkspace,
}) => {
  let history = useHistory();
  const [redirect, setRedirect] = useState(false);

  const redirectToForm = () => {
    if (redirect) {
      switch (type) {
        case "workspace":
          return <Redirect to={`/createWorkspace`} />;
        case "team":
          if (userId === ownerId) return <Redirect to={`/createTeam`} />;
      }
    }
  };

  const showWorkspaces =
    data &&
    data.length > 0 &&
    data.map((workspace) => {
      let { owner, description, members, teams, name, _id } = workspace;
      return (
        <Col md="12  mb-2" lg="4" key={_id}>
          <CardItems
            title={name}
            type={type}
            description={description}
            ownerId={owner}
            members={members}
            id={_id}
            openItem={openItem}
            getWorkspaceById={getWorkspaceById}
            showMembers={showMembers}
            setShowMembers={setShowMembers}
            userId={userId}
            deleteWorkspace={deleteWorkspace}
          />
        </Col>
      );
    });

  const showTeams =
    data &&
    data.length > 0 &&
    data.map((workspace) => {
      let { owner, inviteLink, members, tasks, name, _id } = workspace;
      return (
        <Col md="12  mb-2" lg="4" key={_id}>
          <CardItems
            title={name}
            type={type}
            description={""}
            ownerId={owner}
            teamLeaderId={teamLeader}
            members={members}
            id={_id}
            openItem={openItem}
            inviteLink={inviteLink}
            showMembers={showMembers}
            getTeamById={getTeamById}
            setShowMembers={setShowMembers}
            userId={userId}
          />
        </Col>
      );
    });

  const showHeading = () => {
    if (type === "team") {
      return (
        <div>
          <div className="d-flex justify-content-between">
            <h3
              className="text-white mt-3"
              style={{ marginLeft: "10%" }}
              onClick={history.goBack}
            >
              <i
                className="fa fa-arrow-left btn text-white"
                aria-hidden="true"
              ></i>
            </h3>
            {/* {userId === ownerId && (
              <p
                className="text-white mt-4 btn btn-danger"
                style={{ marginRight: "10%", float: "right" }}
                onClick={() => onConfirm()}
              >
                <i className="fa fa-trash " aria-hidden="true"></i>
                <span id="delete-word" className="pl-2">
                  Delete
                </span>
              </p>
            )} */}
          </div>
          <div>
            <h1 className="landing-h1 mt-2">{heading}</h1>
          </div>
        </div>
      );
    } else {
      return <h1 className="landing-h1 mt-5">{heading}</h1>;
    }
  };

  return (
    <div>
      {redirectToForm()}
      {showHeading()}
      <Row style={{ marginTop: "6%", maxWidth: "95%", marginLeft: "10px" }}>
        {(type === "workspace" || userId === ownerId) && (
          <Col md="12 mb-2" lg="4">
            <div
              style={{ left: "0px", right: "0px" }}
              onClick={() => setRedirect(true)}
            >
              <CardItems demo type={type} openItem={() => setRedirect(true)} />
            </div>
          </Col>
        )}
        {type === "workspace" ? showWorkspaces : showTeams}
      </Row>
    </div>
  );
};

export default Landing;
