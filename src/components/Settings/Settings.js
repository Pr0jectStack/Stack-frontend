import React, { useState } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import ChangeImageComponent from "./components/ChangeImageComponent";
import ChangeOtherDetailsComponent from "./components/ChangeOtherDetailsComponent";
import ChangePasswordComponent from "./components/ChangePasswordComponent";
import "./Settings.css";

const Settings = (props) => {
  const [itemSelected, setItemSelected] = useState(0);

  if (props.data.loading) {
    return <h2> Loading...</h2>;
  } else if (props.data.error) {
    return <h2>{props.data.error}</h2>;
  } else
    return (
      <Row style={{ marginTop: "50px" }}>
        <Col sm={1} xs={1} md={1} lg={2}></Col>
        <Col sm={10} xs={10} md={3} lg={2}>
          <Card
            style={{
              backgroundColor: "inherit",
              borderWidth: "2px",
              borderColor: "#1e2329",
              color: "lightgrey",
            }}
          >
            <Card.Header style={{ color: "#8b9499", fontWeight: "bold" }}>
              Settings
            </Card.Header>
            <ListGroup>
              <ListGroup.Item
                id={itemSelected === 0 ? "list-item-selected" : "list-item"}
                onClick={() => setItemSelected(0)}
              >
                Profile
              </ListGroup.Item>
              <ListGroup.Item
                id={itemSelected === 1 ? "list-item-selected" : "list-item"}
                onClick={() => setItemSelected(1)}
              >
                Security
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={6} lg={7} id={itemSelected === 0 ? "" : "inactive"}>
          <h3 id="heading">Public profile</h3>
          <hr />
          <Row>
            <Col className="d-xs-block d-sm-block d-md-block d-lg-none">
              <ChangeImageComponent />
            </Col>
            <Col>
              <ChangeOtherDetailsComponent
                userData={props.userData}
                updateOtherDetails={props.changeOtherSettings}
              />
            </Col>
            <Col sm={0} xs={0} md={0}></Col>
            <Col className="d-none d-lg-block">
              <ChangeImageComponent changeImage={props.changeImage} />
            </Col>
          </Row>
        </Col>
        <Col md={6} lg={7} id={itemSelected === 1 ? "" : "inactive"}>
          <h3 id="heading">Change password</h3>
          <hr />
          <ChangePasswordComponent changePassword={props.changePassword} />
        </Col>
      </Row>
    );
};

export default Settings;
