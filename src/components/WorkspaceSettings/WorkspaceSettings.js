import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SettingsSideMenu from "../../utils/SettingsSideMenu";
import SettingsTopRow from "../../utils/SettingsTopRow";
import Loading from "../../utils/Loading/Loading";
import GeneralSettingsComponent from "./components/GeneralSettingsComponent";
import WorkspaceMembersComponent from "./components/WorkspaceMembersComponent";
import AllTeamsComponent from "./components/AllTeamsComponent";
import "./WorkspaceSettings.css";

const WorkspaceSettings = (props) => {
  const { loading, currentWorkspace, addingMembers } = props.data || null;
  const [itemSelected, setItemSelected] = useState(0);

  const { wid } = useParams();

  // TODO: Add toast for errors.

  useEffect(() => {
    props.getWorkspaceById(wid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || !currentWorkspace || addingMembers) {
    return <Loading />;
  } else {
    return (
      <div>
        <SettingsTopRow title={currentWorkspace.name} subtitle={"Workspace"} />
        <Row style={{ marginTop: "30px" }}>
          <Col sm={1} xs={1} md={1} lg={2}></Col>
          <Col sm={10} xs={10} md={3} lg={2}>
            <SettingsSideMenu
              header={"Workspace Settings"}
              items={["General", "Members", "All teams"]}
              itemSelected={itemSelected}
              setItemSelected={setItemSelected}
            />
          </Col>
          <Col md={6} lg={7} id={itemSelected === 0 ? "" : "inactive"}>
            <h3 className="heading">General settings</h3>
            <hr />
            <GeneralSettingsComponent
              wid={wid}
              userId={props.userId}
              name={currentWorkspace.name}
              description={currentWorkspace.description}
              updateWorkspaceDetails={props.updateWorkspaceDetails}
              deleteWorkspace={props.deleteWorkspace}
            />
          </Col>
          <Col md={6} lg={7} id={itemSelected === 1 ? "" : "inactive"}>
            <h3 className="heading" style={{ marginLeft: "1%" }}>
              Members
            </h3>
            <hr />
            <WorkspaceMembersComponent
              wid={wid}
              name={currentWorkspace.name}
              members={currentWorkspace.members}
            />
          </Col>
          <Col md={6} lg={7} id={itemSelected === 2 ? "" : "inactive"}>
            <h3 className="heading" style={{ marginLeft: "1%" }}>
              All Teams
            </h3>
            <hr />
            <AllTeamsComponent teams={currentWorkspace.teams} />
          </Col>
        </Row>
      </div>
    );
  }
};

export default WorkspaceSettings;
