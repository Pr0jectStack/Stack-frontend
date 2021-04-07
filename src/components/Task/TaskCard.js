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
    <div
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
      style={{
        maxHeight: "auto",
        minHeight: "50px",
        background: "white",
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <div className="d-flex justify-content-between">
        <div style={{padding:"20px"}}>
          {taskDescription}
          <span className="ml-3"><i class="fa fa-clock-o" aria-hidden="true">{'  '}24/02/2020</i></span>
        </div>
        
        <div className="task-options" style={{fontSize:"30px",}}>
          {" "}
          <i
            className="fa fa-eye bg-info p-3 text-white"
            aria-hidden="true"
            style={{ height: "100%", }}
            // onClick={()=>alert("View")} [ ADD VIEW FUNCTIONALITY ]
          ></i>
          <i
            className="fa fa-pencil bg-dark p-3 text-white"
            aria-hidden="true"
            style={{ height: "100%", }}
            // onClick={()=>alert("Edit")} [ ADD EDIT FUNCTIONALITY ]
          ></i>
          <i
            className="fa fa-trash bg-danger p-3 text-white"
            style={{ height: "100%" }}
            aria-hidden="true"
            // onClick={()=>alert("Delete")} [ ADD DELETE FUNCTIONALITY] 
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
