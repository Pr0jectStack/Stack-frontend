import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ChangeImageComponent from "./components/ChangeImageComponent";
import ChangeOtherDetailsComponent from "./components/ChangeOtherDetailsComponent";
import ChangePasswordComponent from "./components/ChangePasswordComponent";
import YourWorkspacesComponent from "./components/YourWorkspacesComponent";
import Loading from "../../utils/Loading/Loading";
import SettingsSideMenu from "../../utils/SettingsSideMenu";
import SettingsTopRow from "../../utils/SettingsTopRow";
import { convertBufferToImage } from "../../utils/helper_functions";
import "./Settings.css";

const Settings = (props) => {
  const [itemSelected, setItemSelected] = useState(0);

  if (props.data.loading) {
    return <Loading />;
  } else
    return (
      <div>
        <SettingsTopRow
          image={convertBufferToImage(props.userData.image)}
          title={props.userData.username}
          subtitle={"User profile"}
        />
        <Row style={{ marginTop: "30px" }}>
          <Col sm={1} xs={1} md={1} lg={2}></Col>
          <Col sm={10} xs={10} md={3} lg={2}>
            <SettingsSideMenu
              header={"Settings"}
              items={["Profile", "Security", "Your Workspaces"]}
              itemSelected={itemSelected}
              setItemSelected={setItemSelected}
            />
          </Col>
          <Col md={6} lg={7} id={itemSelected === 0 ? "" : "inactive"}>
            <h3 className="heading">Public profile</h3>
            <hr />
            <Row>
              <Col className="d-xs-block d-sm-block d-md-block d-lg-none">
                <ChangeImageComponent
                  userData={props.userData}
                  changeImage={props.changeImage}
                />
              </Col>
              <Col>
                <ChangeOtherDetailsComponent
                  userData={props.userData}
                  updateOtherDetails={props.changeOtherSettings}
                />
              </Col>
              <Col sm={0} xs={0} md={0}></Col>
              <Col className="d-none d-lg-block">
                <ChangeImageComponent
                  userData={props.userData}
                  changeImage={props.changeImage}
                />
              </Col>
            </Row>
          </Col>
          <Col md={6} lg={7} id={itemSelected === 1 ? "" : "inactive"}>
            <h3 className="heading" style={{ marginLeft: "1%" }}>
              Change password
            </h3>
            <hr />
            <ChangePasswordComponent
              userId={props.userData._id}
              changePassword={props.changePassword}
            />
          </Col>
          <Col md={6} lg={7} id={itemSelected === 2 ? "" : "inactive"}>
            <h3 className="heading" style={{ marginLeft: "1%" }}>
              Your Workspaces
            </h3>
            <hr />
            <YourWorkspacesComponent
              workspaces={props.userData.workspaces}
              userId={props.userData._id}
            />
          </Col>
        </Row>
      </div>
    );
};

export default Settings;
