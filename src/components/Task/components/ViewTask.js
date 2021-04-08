import React, { useState } from "react";
import {
  Col,
  Row,
  Modal,
  Dropdown,
  OverlayTrigger,
  Popover,
  DropdownButton,
  Form,
} from "react-bootstrap";

import "./ViewTask.css";

const ViewTask = ({
  task,
  showModal,
  handleClose,
  moveTask,
  editTask,
  hasAuth,
}) => {
  const [showDescSaveButton, setDescShowSaveButton] = useState(false);
  const [showDeadlineSaveButton, setDeadlineShowSaveButton] = useState(false);
  const [taskDescription, setTaskDescription] = useState(task.taskDescription);
  const [taskName, setTaskName] = useState(task.taskName);
  const [changeName, setChangeName] = useState(false);
  const [destination, setDestination] = useState("BACKLOG");
  const [deadline, setDeadline] = useState(task.deadline);

  const handleMove = () => {
    moveTask(task._id, destination);
    onHide();
  };

  const handleDescChange = (event) => {
    setTaskDescription(event.target.value);
    setDescShowSaveButton(true);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
    setDeadlineShowSaveButton(true);
  };

  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const onHide = () => {
    setDescShowSaveButton(false);
    setDeadlineShowSaveButton(false);
    setChangeName(false);
    setTaskDescription(task.taskDescription);
    setDeadline(task.deadline);
    setTaskName(task.taskName);
    handleClose();
  };

  const onDescSave = () => {
    const newTask = {
      ...task,
      taskDescription: taskDescription,
    };
    editTask(newTask);
    onHide();
  };

  const onDeadlineSave = () => {
    const newTask = {
      ...task,
      deadline: deadline,
    };
    editTask(newTask);
    onHide();
  };

  const onNameSave = () => {
    const newTask = {
      ...task,
      taskName: taskName,
    };
    editTask(newTask);
    onHide();
  };

  return (
    <Modal
      show={showModal}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="pb-0 mb-0" closeButton>
        <Row className="pb-0 mb-0">
          <Col sm={12}>
            <Modal.Title className="d-flex" onClick={() => setChangeName(true)}>
              {!changeName && <span>{task.taskName}</span>}
              {hasAuth && changeName && (
                <Form inline>
                  <Form.Group>
                    <Form.Control
                      style={{
                        backgroundColor: "rgb(233, 224, 224)",
                        color: "black",
                        borderWidth: "1px",
                        width: "100%",
                        marginRight: "5px",
                      }}
                      type="text"
                      name="taskName"
                      id="taskName"
                      value={taskName}
                      onChange={handleNameChange}
                    />
                  </Form.Group>

                  <span
                    type="button"
                    id="name-button"
                    className="d-flex justify-content-center align-items-center"
                    size="sm"
                    onClick={onNameSave}
                  >
                    Save
                  </span>
                </Form>
              )}
            </Modal.Title>
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
        {hasAuth && (
          <Form className="mb-4" style={{ width: "100%" }}>
            <Form.Group>
              <Form.Label
                className="mr-3"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Due Date
              </Form.Label>
              <Form.Control
                style={{
                  color: "black",
                  borderWidth: "2px",
                  borderColor: "lightgrey",
                  width: "50%",
                  height: "40px",
                }}
                type="date"
                format="dd/mm/yyyy"
                name="deadline"
                id="deadline"
                value={
                  deadline && new Date(deadline).toISOString().slice(0, 10)
                }
                placeholder="dd/mm/yyy"
                onChange={handleDeadlineChange}
              />
            </Form.Group>
            {showDeadlineSaveButton && (
              <span
                type="button"
                id="deadline-button"
                className="d-flex justify-content-center align-items-center"
                size="sm"
                onClick={onDeadlineSave}
              >
                Save
              </span>
            )}
          </Form>
        )}
        <Form>
          <Form.Group>
            <Form.Label style={{ fontWeight: "600", fontSize: "20px" }}>
              Task Description
            </Form.Label>
            <Form.Control
              style={{
                backgroundColor: "lightgrey",
                color: "black",
                borderWidth: "0px",
                width: "100%",
                height: "80px",
              }}
              as="textarea"
              name="taskDescription"
              id="taskDescription"
              value={taskDescription}
              placeholder="Add task description"
              onChange={handleDescChange}
              disabled={!hasAuth}
            />
          </Form.Group>
          {showDescSaveButton && (
            <span
              type="button"
              id="move-button"
              className="mt-3 d-flex justify-content-center align-items-center"
              size="sm"
              onClick={onDescSave}
            >
              Save
            </span>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ViewTask;
