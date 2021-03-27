import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { Modal, Button, Badge, Container, Row, Col } from "react-bootstrap";
import CreateTask from "./CreateTask";
const Backlog = (props) => {
  const addTask = props.addTask;
  const tasks = props.tasks;
  const [modalShow, setModalShow] = useState(false);

  const showTasks =
    tasks.length > 0 &&
    tasks.map((task) => {
      let { taskDescription, category } = task;
      if (category === "backlog")
        return (
          <TaskCard taskDescription={taskDescription} category={category} />
        );
    });

  return (
    <div>
      <h3 className="text-white mb-3">
        Backlog
       
      </h3>
      {/* <button onClick={() => setModalShow(true)}>Add a task</button> */}
      <p
        id="task-card"
        className="bg-light text-center"
        style={{ padding: "20px", background: "white", width: "100%", border:"1px dashed" }}
        onClick={() => setModalShow(true)}
      >
        {/* Add a task */}
        <span style={{fontSize:"40px"}}>
          <i className="fa fa-plus mx-3 mt-3" aria-hidden="true"></i>
        </span>
        <br/>
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Task
        </Modal.Title>{" "}
      </Modal.Header>
      <Modal.Body>
        <CreateTask />
      </Modal.Body>
    </Modal>
  );
};

export default Backlog;
