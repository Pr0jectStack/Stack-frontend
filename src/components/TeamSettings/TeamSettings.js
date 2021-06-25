import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Loading from "../../utils/Loading/Loading";
import SettingsTopRow from "../../utils/SettingsTopRow";
import SettingsSideMenu from "../../utils/SettingsSideMenu";
import TeamMembersComponent from "./components/TeamMembersComponent";
import GeneralSettingsComponent from "./components/GeneralSettingsComponent";
import "./TeamSettings.css";

const TeamSettings = (props) => {
  const { loading, currentTeam } = props.data || null;
  const [itemSelected, setItemSelected] = useState(0);

  const { tid } = useParams();

  useEffect(() => {
    props.getTeamById(tid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: Add Toasts for errors.

  if (loading || !currentTeam) {
    return <Loading />;
  } else {
    return (
      <div>
        <SettingsTopRow title={currentTeam.name} subtitle={"Team"} />
        <Row style={{ marginTop: "30px" }}>
          <Col sm={1} xs={1} md={1} lg={2}></Col>
          <Col sm={10} xs={10} md={3} lg={2}>
            <SettingsSideMenu
              header={"Team Settings"}
              items={["General", "Members"]}
              itemSelected={itemSelected}
              setItemSelected={setItemSelected}
            />
          </Col>
          <Col md={6} lg={7} id={itemSelected === 0 ? "" : "inactive"}>
            <h3 className="heading">General settings</h3>
            <hr />
            <GeneralSettingsComponent
              name={currentTeam.name}
              description={currentTeam.description}
            />
          </Col>
          <Col md={6} lg={7} id={itemSelected === 1 ? "" : "inactive"}>
            <h3 className="heading" style={{ marginLeft: "1%" }}>
              Members
            </h3>
            <hr />
            <TeamMembersComponent
              team={currentTeam}
              makeTeamLeader={props.makeTeamLeader}
            />
          </Col>
        </Row>
      </div>
    );
  }
};

export default TeamSettings;
