import React, { useState } from "react";
import Backlog from "./components/Backlog";
import Review from "./components/Review";
import Completed from "./components/Completed";
import InProgress from "./components/InProgress";
import Loading from "../../utils/Loading/Loading";

const Task = (props) => {
  const goBack = () => {
    props.setCurrentPage("Team");
  };

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
      membersAssigned: task.membersAssigned,
    };
    props.addTask(newTask, props.data.tid, props.userId);
  };

  const moveTask = (taskId, destination) => {
    props.moveTask(taskId, props.data.tid, destination);
  };

  const editTask = (task) => {
    props.editTask(task, props.data.tid, props.userId);
  };

  const deleteTask = (taskId) => {
    props.deleteTask(taskId, props.data.tid, props.userId);
  };

  const assignMembers = (taskId, members) => {
    props.assignMembers(taskId, props.data.tid, props.userId, members);
  };

  if (props.data.loading || props.teamData.loading) {
    return <Loading />;
  } else if (props.data.error) {
    return <h2>{props.data.error}</h2>;
  } else {
    return (
      <div className="" style={{ marginInline: "8%" }}>
        <h3
          className="text-white mt-3"
          style={{ marginLeft: "2.3%" }}
          onClick={() => goBack()}
        >
          <i className="fa fa-arrow-left btn text-white" aria-hidden="true"></i>
        </h3>
        <h1 className="landing-h1 mt-2">{props.teamData.currentTeam.name}</h1>;
        <div className="row" style={{ marginTop: "4%" }}>
          <div className="col-md-3 mx-auto">
            <Backlog
              tasks={props.data}
              tid={props.data.tid}
              addTask={addTask}
              moveTask={moveTask}
              editTask={editTask}
              deleteTask={deleteTask}
              assignMembers={assignMembers}
              hasAuth={hasAuth()}
            />
          </div>
          <div className="col-md-3 mx-auto">
            <InProgress
              tasks={props.data}
              tid={props.data.tid}
              moveTask={moveTask}
              deleteTask={deleteTask}
              assignMembers={assignMembers}
              hasAuth={hasAuth()}
            />
          </div>
          <div className="col-md-3 mx-auto">
            <Review
              tasks={props.data}
              tid={props.data.tid}
              moveTask={moveTask}
              editTask={editTask}
              deleteTask={deleteTask}
              assignMembers={assignMembers}
              hasAuth={hasAuth()}
            />
          </div>
          <div className="col-md-3 mx-auto">
            <Completed
              tasks={props.data}
              tid={props.data.tid}
              moveTask={moveTask}
              editTask={editTask}
              deleteTask={deleteTask}
              assignMembers={assignMembers}
              hasAuth={hasAuth()}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Task;
