import React from "react";
import "./TaskCard.css";
const TaskCard = ({
  taskDescription,
  deadline,
  category,
  priority,
  membersAssigned,
  assignedBy,
}) => {
  return (
    <p
    id="task-card"
      className={
        category === "completed"
          ? "bg-success"
          : category === "review"
          ? "bg-warning"
          : category === "inProgress"
          ? "bg-info"
          : "bg-light"
      }
      style={{ padding: "20px", background: "white", width: "100%" }}
    >
      {taskDescription}
      <span className="task-options" style={{float:"right",fontSize:"20px"}}>
        <i className="fa fa-pencil bg-dark p-2 text-white" style={{borderRadius:"12px"}} aria-hidden="true"></i>
        <i className="fa fa-trash bg-danger ml-1 p-2 text-white" style={{borderRadius:"12px"}} aria-hidden="true"></i>
      </span>
    </p>
  );
};

export default TaskCard;
