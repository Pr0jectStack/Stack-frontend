import React, { useState } from "react";
import Backlog from "./components/Backlog";
import Review from "./components/Review";
import Completed from "./components/Completed";
import InProgress from "./components/InProgress";

const Task = (props) => {
  const hasAuth = () => {
    if (!props.userId) return false;
    if (
      props.data.owner &&
      props.userId.toString() === props.data.owner.toString()
    )
      return true;
    if (
      props.data.teamLeader &&
      props.userId.toString() === props.data.teamLeader.toString()
    )
      return true;
    return false;
  };

  const addTask = (task) => {
    const newTask = {
      taskName: task.taskName,
      taskDescription: task.taskDescription,
      status: task.status,
      priority: task.priority,
      deadline: task.deadline,
      membersAssigned: task.members,
    };
    props.addTask(newTask, props.data.tid, props.userId);
  };

  const moveTask = (taskId, destination) => {
    props.moveTask(taskId, props.data.tid, destination);
  };

  const editTask = (task) => {
    props.editTask(task, props.data.tid, props.userId);
  };

  if (props.data.loading) {
    return <h2> Loading...</h2>;
  } else if (props.data.error) {
    return <h2>{props.data.error}</h2>;
  } else {
    return (
      <div className="" style={{ marginInline: "8%" }}>
        <div className="row" style={{ marginTop: "7%" }}>
          <div className="col-md-3 mx-auto">
            <Backlog
              tasks={props.data}
              tid={props.data.tid}
              addTask={addTask}
              moveTask={moveTask}
              editTask={editTask}
              hasAuth={hasAuth}
            />
          </div>
          <div className="col-md-3 mx-auto">
            <InProgress
              tasks={props.data}
              tid={props.data.tid}
              moveTask={moveTask}
              hasAuth={hasAuth}
            />
          </div>
          <div className="col-md-3 mx-auto">
            <Review
              tasks={props.data}
              tid={props.data.tid}
              moveTask={moveTask}
              editTask={editTask}
              hasAuth={hasAuth}
            />
          </div>
          <div className="col-md-3 mx-auto">
            <Completed
              tasks={props.data}
              tid={props.data.tid}
              moveTask={moveTask}
              editTask={editTask}
              hasAuth={hasAuth}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Task;
