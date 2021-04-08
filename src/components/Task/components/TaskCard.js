import React, { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import "./TaskCard.css";
import ViewTask from "./ViewTask";
const TaskCard = ({ task, moveTask }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <ViewTask
        task={task}
        showModal={showModal}
        handleClose={handleClose}
        moveTask={moveTask}
      />
      <div
        key={task._id}
        id="task-card"
        className={
          task.status === "COMPLETED"
            ? "bg-success"
            : task.status === "REVIEW"
            ? "bg-warning"
            : task.status === "IN_PROGRESS"
            ? "bg-info"
            : "bg-light"
        }
        onClick={() => setShowModal(true)}
        style={{
          maxHeight: "auto",
          minHeight: "50px",
          background: "white",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ padding: "20px" }}>
            {task.taskName}
            {task.deadline && (
              <span className="ml-3">
                <i class="fa fa-clock-o" aria-hidden="true">
                  {"  "}
                  {task.deadline}
                </i>
              </span>
            )}
          </div>

          {/* <div className="task-options" style={{ fontSize: "30px" }}>
            {" "}
            <i
              className="fa fa-eye bg-info p-3 text-white"
              aria-hidden="true"
              style={{ height: "100%" }}
              // onClick={()=>alert("View")} [ ADD VIEW FUNCTIONALITY ]
            ></i>
            <i
              className="fa fa-pencil bg-dark p-3 text-white"
              aria-hidden="true"
              style={{ height: "100%" }}
              // onClick={()=>alert("Edit")} [ ADD EDIT FUNCTIONALITY ]
            ></i>
            <i
              className="fa fa-trash bg-danger p-3 text-white"
              style={{ height: "100%" }}
              aria-hidden="true"
              // onClick={()=>alert("Delete")} [ ADD DELETE FUNCTIONALITY]
            ></i>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
