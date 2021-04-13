import React, { useState } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import ChangeImageComponent from "./components/ChangeImageComponent";
import ChangeOtherDetailsComponent from "./components/ChangeOtherDetailsComponent";
import ChangePasswordComponent from "./components/ChangePasswordComponent";
import Loading from "../../utils/Loading/Loading";
import "./Settings.css";
import { toast } from "react-toastify";

const Settings = (props) => {
  const [itemSelected, setItemSelected] = useState(0);


  /**
   * Display a 3s Toast on the top right corner of the screen
   * @param {string} status - SUCCESS/ ERROR
   * @param {string} message - Text for the Toast Body
   */
  const showToast = (status, message) => {
    if (status === "SUCCESS") toast.success(message, { toastId: "success" });
    else toast.error(message, { toastId: "error" });
  };

  let shown =false;

  // if(props.data.error && !shown){
  //   showToast("ERROR","Some error occured, Please try again");
  //   shown=true;
  // }
  // if(props.data.changedData && !shown){
  //   showToast("SUCCESS","Successfuly updated");
  //   shown=true;
  // }

  if (props.data.loading) {
    return <Loading/>
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
          <h3 id="heading" style={{marginLeft:"1%"}}>Change password</h3>
          <hr />
          <ChangePasswordComponent
            userId={props.userData._id}
            changePassword={props.changePassword}
          />
        </Col>
      </Row>
    );
};

export default Settings;
