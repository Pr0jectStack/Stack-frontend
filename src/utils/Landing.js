import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
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
  updateCurrentWorkspace,
  updateCurrentTeam,
  showMembers,
  setShowMembers
}) => {
  console.log(updateCurrentWorkspace)
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
    data.length > 0 &&
    data.map((workspace) => {
      let { owner, description, members, teams, name, _id } = workspace;
      return (
        <Col md="12  mb-2" lg="4" key={_id}>
          <CardItems
            title={name}
            type={type}
            description={description}
            owner={owner}
            members={members}
            id={_id}
            openItem={openItem}
            updateCurrentWorkspace={updateCurrentWorkspace}
            showMembers={showMembers}
            setShowMembers={setShowMembers}
          />
        </Col>
      );
    });

  const showTeams =
    data.length > 0 &&
    data.map((workspace) => {
      let { owner, inviteLink, members, tasks, name, _id } = workspace;
      return (
        <Col md="12  mb-2" lg="4" key={_id}>
          <CardItems
            title={name}
            type={type}
            description={""}
            owner={owner}
            members={members}
            id={_id}
            openItem={openItem}
            inviteLink={inviteLink}
            showMembers={showMembers}
            updateCurrentTeam={updateCurrentTeam}
            setShowMembers={setShowMembers}
          />
        </Col>
      );
    });

  const showHeading = () => {
    if (type === "team") {
      return (
        <div className="">
          <div>
            <h3
              className="text-white mt-3"
              style={{ marginLeft: "10%" }}
              onClick={() => goBack()}
            >
              <i className="fa fa-arrow-left btn text-white" aria-hidden="true"></i>
            </h3>
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
