import React, { useState } from "react";
import Backlog from "./Backlog";
import Review from "./Review";
import Completed from "./Completed";
import InProgress from "./InProgress";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      taskDescription: "Tasks A",
      category: "backlog",
    },
    {
      taskDescription: "Tasks B",
      category: "backlog",
    },
    {
      taskDescription: "Tasks C",
      category: "completed",
    },
    {
      taskDescription: "Tasks D",
      category: "review",
    },
    {
      taskDescription: "Tasks E",
      category: "backlog",
    },
    {
      taskDescription: "Tasks F",
      category: "completed",
    },
    {
      taskDescription: "Tasks G",
      category: "inProgress",
    },
    {
      taskDescription: "Tasks H",
      category: "inProgress",
    },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="" style={{marginInline:"8%"}}>
      <div className="row" style={{ marginTop: "7%" }}>
        <div className="col-md-3 mx-auto">
          <Backlog tasks={tasks} addTask={addTask} />
        </div>
        <div className="col-md-3 mx-auto">
          <InProgress tasks={tasks} addTask={addTask}/>
        </div>
        <div className="col-md-3 mx-auto">
          <Review tasks={tasks} addTask={addTask}/>
        </div>
        <div className="col-md-3 mx-auto">
          <Completed tasks={tasks} addTask={addTask}/>
        </div>
      </div>
    </div>
  );
};

export default Task;
