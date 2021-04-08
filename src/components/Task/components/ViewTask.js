import React, { useState } from "react";
import {
  Col,
  Row,
  Modal,
  Dropdown,
  OverlayTrigger,
  Popover,
  DropdownButton,
} from "react-bootstrap";

import "./ViewTask.css";

const ViewTask = ({ task, showModal, handleClose, moveTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [destination, setDestination] = useState("BACKLOG");

  const handleMove = () => {
    moveTask(task._id, destination);
    handleClose();
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="pb-0 mb-0" closeButton>
        <Row className="pb-0 mb-0">
          <Col sm={12}>
            <Modal.Title className="d-flex">{task.taskName}</Modal.Title>
          </Col>
          <Col sm={12}>
            <p className="d-flex">
              <span className="mr-2">in</span>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                transition={true}
                rootClose={true}
                overlay={
                  <Popover id="popover-menu">
                    <Popover.Content>
                      Select Destination:
                      <DropdownButton
                        className="mt-1"
                        id="dropdown-item-button"
                        title={destination}
                        size="md"
                      >
                        <Dropdown.Item
                          as="button"
                          onClick={() => setDestination("BACKLOG")}
                        >
                          BACKLOG
                        </Dropdown.Item>
                        <Dropdown.Item
                          as="button"
                          onClick={() => setDestination("IN_PROGRESS")}
                        >
                          IN PROGRESS
                        </Dropdown.Item>
                        <Dropdown.Item
                          as="button"
                          onClick={() => setDestination("REVIEW")}
                        >
                          REVIEW
                        </Dropdown.Item>
                        <Dropdown.Item
                          as="button"
                          onClick={() => setDestination("COMPLETED")}
                        >
                          COMPLETED
                        </Dropdown.Item>
                      </DropdownButton>
                      <span
                        type="button"
                        id="move-button"
                        className="mt-3 d-flex justify-content-center align-items-center"
                        size="sm"
                        onClick={handleMove}
                      >
                        Move
                      </span>
                    </Popover.Content>
                  </Popover>
                }
              >
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  {task.status}
                </span>
              </OverlayTrigger>
            </p>
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <h5>{task.taskDescription}</h5>
      </Modal.Body>
    </Modal>
  );
};

export default ViewTask;
