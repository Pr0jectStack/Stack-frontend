import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import CardItems from "./CardItems";
import "./Landing.css";
const Landing = ({ heading, type, _id, data, userId, openItem }) => {
  const [redirect, setRedirect] = useState(false);

  const redirectToForm = () => {
    if (redirect) {
      return (
        <Redirect
          to={type === "workspace" ? `/createWorkspace` : `/createTeam`}
        />
      );
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
          />
        </Col>
      );
    });

  return (
    <div className="">
      {redirectToForm()}
      <h1 className="landing-h1 mt-2">{heading}</h1>
      <Row style={{ marginTop: "6%", maxWidth: "95%", marginLeft: "10px" }}>
        <Col md="12 mb-2" lg="4">
          <div
            style={{ left: "0px", right: "0px" }}
            onClick={() => setRedirect(true)}
          >
            <CardItems demo type={type} />
          </div>
        </Col>
        {type === "workspace" && showWorkspaces}
      </Row>
    </div>
  );
};

export default Landing;
