import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { Modal, Button, Badge, Container, Row, Col } from "react-bootstrap";
import CreateTask from "./CreateTask";
import SpeechToText from "../../../utils/SpeechToText";
const Backlog = (props) => {
  const addTask = props.addTask;
  const tasks = props.tasks.tasks;
  const [modalShow, setModalShow] = useState(false);
  const [note, setNote] = useState(null);

  const showTasks =
    tasks &&
    tasks.length > 0 &&
    tasks.map((task) => {
      if (task.status === "BACKLOG")
        return <TaskCard key={task._id} task={task} />;
    });

  return (
    <div>
      <h3 className="text-white mb-3">Backlog</h3>
      {/* <button onClick={() => setModalShow(true)}>Add a task</button> */}
      <SpeechToText
        note={note}
        setNote={setNote}
        width="100%"
        handleSubmit={() => alert(note)}
      />

      <p
        id="task-card"
        className="bg-light text-center"
        style={{
          padding: "20px",
          background: "white",
          width: "100%",
          border: "1px dashed",
        }}
        onClick={() => setModalShow(true)}
      >
        {/* Add a task */}
        <span style={{ fontSize: "40px" }}>
          <i className="fa fa-plus mx-3 mt-3" aria-hidden="true"></i>
        </span>
        <br />
        Add a new task
      </p>
      {showTasks}
      <NewTaskForm
        show={modalShow}
        addTask={addTask}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

const NewTaskForm = (props) => {
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
          Add new Task
        </Modal.Title>{" "}
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#0e101c", color: "white" }}>
        <CreateTask addTask={addTask} closeModal={props.onHide} />
      </Modal.Body>
    </Modal>
  );
};

export default Backlog;
