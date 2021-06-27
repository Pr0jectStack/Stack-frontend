import React, { useState, useRef } from "react";
import {
  Col,
  Row,
  Modal,
  Dropdown,
  OverlayTrigger,
  Popover,
  DropdownButton,
  Form,
  ListGroup,
  Image,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { convertBufferToImage } from "../../../utils/helper_functions";

import "./ViewTask.css";

const ViewTask = ({
  task,
  showModal,
  handleClose,
  moveTask,
  editTask,
  deleteTask,
  assignMembers,
  hasAuth,
}) => {
  const [showDescSaveButton, setDescShowSaveButton] = useState(false);
  const [showDeadlineSaveButton, setDeadlineShowSaveButton] = useState(false);
  const [showPrioritySaveButton, setPriorityShowSaveButton] = useState(false);
  const [taskDescription, setTaskDescription] = useState(task.taskDescription);
  const [taskName, setTaskName] = useState(task.taskName);
  const [member, setMember] = useState("");
  const [members, setMembers] = useState([]);
  const [changeName, setChangeName] = useState(false);
  const [destination, setDestination] = useState("BACKLOG");
  const [deadline, setDeadline] = useState(task.deadline);
  const [priority, setPriority] = useState(task.priority);

  const modalBody = useRef(null); // Remove focus from Modal to Input

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
    setPriority(task.priority);
    setPriorityShowSaveButton(false);
    setMember("");
    setMembers([]);
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

  const onPrioritySave = () => {
    const newTask = {
      ...task,
      priority: priority,
    };
    editTask(newTask);
    onHide();
  };

  const onDelete = () => {
    deleteTask(task._id);
    onHide();
  };

  const onAssigningMembersSubmit = () => {
    if (members.length > 0) assignMembers(task._id, members);
    onHide();
  };

  return (
    <Modal
      show={showModal}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="pb-0 mb-0" closeButton>
        <Row className="pb-0 mb-0">
          <Col sm={12}>
            <Modal.Title
              className="d-flex"
              onClick={() => {
                if (hasAuth) setChangeName(true);
              }}
            >
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
      <Modal.Body ref={modalBody}>
        <Row className="mb-3">
          <Col>
            <div className="mb-3">
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Task Priority
              </span>
              <DropdownButton
                className="mt-1"
                id="dropdown-item-button"
                title={priority}
                size="md"
                variant="secondary"
                disabled={!hasAuth}
              >
                <Dropdown.Item
                  as="button"
                  onClick={() => {
                    setPriority("NORMAL");
                    setPriorityShowSaveButton(true);
                  }}
                >
                  NORMAL
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={() => {
                    setPriority("LOW");
                    setPriorityShowSaveButton(true);
                  }}
                >
                  LOW
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={() => {
                    setPriority("URGENT");
                    setPriorityShowSaveButton(true);
                  }}
                >
                  URGENT
                </Dropdown.Item>
              </DropdownButton>
              {showPrioritySaveButton && (
                <span
                  type="button"
                  id="priority-button"
                  className="mt-3 d-flex justify-content-center align-items-center"
                  size="sm"
                  onClick={onPrioritySave}
                >
                  Save
                </span>
              )}
            </div>
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
                      width: "175px",
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
                    disabled={!hasAuth}
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
          </Col>
          <Col sm={4} className="border-left border-dark">
            <div style={{ height: "100%" }}>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Members Assigned
              </span>
              <ListGroup variant="flush" className="mt-2">
                {hasAuth && (
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    transition={true}
                    rootClose={true}
                    container={modalBody}
                    overlay={
                      <Popover id="popover-assign-menu">
                        <Popover.Content>
                          Assign Members:
                          <InputGroup className="mb-3">
                            <FormControl
                              name=""
                              value={member}
                              placeholder="Enter email or username"
                              aria-label="Member's email or username"
                              onChange={(e) => setMember(e.target.value)}
                            />
                            <InputGroup.Append>
                              <Button
                                variant="outline-secondary"
                                onClick={() => {
                                  if (member !== "") {
                                    setMembers([...members, member]);
                                  }
                                  setMember("");
                                }}
                              >
                                <i className="fa fa-plus" />
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                          <div>
                            {members.length > 0 &&
                              members.map((member) => {
                                return (
                                  <Col md="12  mb-2" lg="auto">
                                    <p
                                      className="bg-dark p-2 text-white text-center"
                                      style={{
                                        borderRadius: "15px",
                                        fontSize: "13px",
                                      }}
                                    >
                                      {member}
                                    </p>
                                  </Col>
                                );
                              })}
                          </div>
                          <span
                            type="button"
                            id="assign-members-button"
                            className="d-flex justify-content-center align-items-center"
                            size="md"
                            onClick={onAssigningMembersSubmit}
                          >
                            Submit
                          </span>
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <ListGroup.Item id="add-new-member-button">
                      <i className="fa fa-plus mr-2" />
                      <span>Add new member</span>
                    </ListGroup.Item>
                  </OverlayTrigger>
                )}
                {task.membersAssigned &&
                  task.membersAssigned.length > 0 &&
                  task.membersAssigned.map((member) => {
                    return <MemberView member={member} />;
                  })}
              </ListGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {hasAuth && (
              <span
                type="button"
                id="delete-button"
                className="mt-2 d-flex justify-content-center align-items-center"
                size="sm"
                onClick={onDelete}
              >
                Delete Task
              </span>
            )}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ViewTask;

const MemberView = ({ member }) => {
  return (
    <ListGroup.Item>
      <Image
        className="mr-3"
        src={convertBufferToImage(member.image)}
        style={{ height: "40px", width: "40px" }}
        roundedCircle
      />
      {member.username}
    </ListGroup.Item>
  );
};
