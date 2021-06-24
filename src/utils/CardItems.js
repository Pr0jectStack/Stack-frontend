import React, { useState } from "react";
import { Card, Row, Col, Badge, Modal } from "react-bootstrap";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import AddNewMembersUtilContainer from "../containers/AddNewMembersUtilContainer";
import MembersListContainer from "../containers/MembersListContainer";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { deleteWorkspace } from "../redux/workspace/workspaceActions";
const CardItems = ({
  demo = false,
  type,
  title,
  subtitle,
  description,
  teamLeaderId,
  members,
  ownerId,
  userId,
  id,
  openItem,
  getWorkspaceById,
  getTeamById,
  setShowMembers,
  deleteWorkspace
}) => {
  const [modalShow, setModalShow] = useState(false);

  const handleShowMembers = (id) => {
    if (type === "workspace") {
      getWorkspaceById(id);
      setShowMembers(type);
    } else if (type === "team") {
      // TODO: getTeamById(id);
      getTeamById(id);
      setShowMembers(type);
    }
    setShowMembers(type);
  };
  const location = (id) => {
    return {
      pathname: "/dashboard/" + type + "/" + id,
    };
  };

  const onConfirm = () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: `Are you sure to do delete ${title}`,
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteWorkspace(),
        },
        {
          label: "No",
          onClick: () => alert("Cancelled.."),
        },
      ],
    });
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
              {userId == ownerId && <i
                  onClick={() => onConfirm()}
                style={{ float: "right", backgroundColor: "#0e101c" }}
                className="fa fa-trash btn btn-danger btn-oultine btn-sm mx-1"
                aria-hidden="true"
              ></i>}
              {(userId == ownerId || (type == "team" && userId == teamLeaderId)) &&<i
                onClick={() => setModalShow(true)}
                style={{ float: "right", backgroundColor: "#0e101c" }}
                className="fa fa-user-plus btn text-light btn-info btn-sm"
                aria-hidden="true"
              ></i>}
            </Card.Title>
            <Card.Subtitle className="mb-3" style={{ color: "grey" }}>
              {subtitle}
            </Card.Subtitle>
            <Card.Text className="mb-5 text-white">
              {description.length>70?description.substring(0,70)+"...":description}
              <br />
            </Card.Text>
          </Card.Body>

          <Link
            to={location(id)}
            className="btn tbtn-outline btn-info mx-3 my-1"
          >
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
