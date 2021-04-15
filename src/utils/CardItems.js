import React, { useState } from "react";
import { Card, Row, Col, Badge, Modal } from "react-bootstrap";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import AddNewMembersUtilContainer from "../containers/AddNewMembersUtilContainer";
import MembersListContainer from "../containers/MembersListContainer";
import { Link } from "react-router-dom";

const CardItems = ({
  demo = false,
  type,
  title,
  subtitle,
  description,
  teamLeader,
  members,
  owner,
  id,
  openItem,
  updateCurrentWorkspace,
  updateCurrentTeam,
  setShowMembers,
}) => {
  const [modalShow, setModalShow] = useState(false);

  const handleShowMembers = (id) => {
    if (type === "workspace") {
      updateCurrentWorkspace(id);
      setShowMembers(type);
    } else if (type === "team") {
      //TODO: updateCurrentTeam(id);
      updateCurrentTeam(id);
      setShowMembers(type);
    }
  };
  const location = (id) => {
    return {
      pathname: "/dashboard/" + type + "/" + id,
    };
  };

  return (
    <div>
      {demo ? (
        <Card
          style={{
            width: "90%",
            height: "280px",
            marginBottom: "5%",
            backgroundColor: "inherit",
            borderWidth: "3px",
            borderColor: "#222128",
            borderStyle: "dashed",
            borderRadius: "15px",
          }}
          onClick={() => openItem(id)}
        >
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{}</Card.Subtitle>
            <Card.Text style={{ color: "grey" }} className="text-center mt-4">
              {
                <i
                  style={{ fontSize: "130px" }}
                  class="fa fa-plus-circle"
                  aria-hidden="true"
                ></i>
              }
            </Card.Text>
            <Card.Title style={{ color: "#008ecc" }} className="text-center">
              Create a new {type}
            </Card.Title>
            <Card.Link href="#">{}</Card.Link>
            <Card.Link href="#">{}</Card.Link>
          </Card.Body>
        </Card>
      ) : (
        <Card
          style={{
            width: "90% ",
            height: "280px",
            marginBottom: "5%",
            backgroundColor: "inherit",
            borderWidth: "2px",
            borderColor: "#222128",
            borderRadius: "15px",
          }}
        >
          <Card.Body>
            <Card.Title style={{ color: "#008ecc" }}>
              {title}
              <i
                onClick={() => setModalShow(true)}
                style={{ float: "right", backgroundColor: "#0e101c" }}
                className="fa fa-user-plus btn text-light"
                aria-hidden="true"
              ></i>
            </Card.Title>
            <Card.Subtitle className="mb-3" style={{ color: "grey" }}>
              {subtitle}
            </Card.Subtitle>
            <Card.Text className="mb-5 text-white">
              {description}
              <br />
            </Card.Text>
          </Card.Body>

          <Link to={location(id)} className="btn tbtn-outline btn-info mx-3 my-1">
            {" "}
            View
          </Link>

          <p className="btn text-white" onClick={() => handleShowMembers(id)}>
            Show Members
          </p>

          {/* <Progress
            className="mx-center shadow pb-3 px-3"
            style={{ fontSize: "10px" }}
            type="bar"
            width={100}
            status="default"
            percent={80}
            strokeWidth={3}
            theme={{
              default: {
                symbol: `${80}/100`,
                trailcolor: "lightblue",
                color: "#008ecc",
              },
            }}
          /> */}
          <AddNewMembers
            show={modalShow}
            type={type}
            id={id}
            title={title}
            onHide={() => setModalShow(false)}
          />
        </Card>
      )}
    </div>
  );
};

const AddNewMembers = (props) => {
  const addTask = props.addTask;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "#0e101c", color: "white" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Add members to {props.title}
        </Modal.Title>{" "}
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#0e101c", color: "white" }}>
        <AddNewMembersUtilContainer
          closeModal={props.onHide}
          id={props.id}
          type={props.type}
        />
      </Modal.Body>
    </Modal>
  );
};

export default CardItems;
