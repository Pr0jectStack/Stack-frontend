import React, { useState } from "react";
import TaskCard from "./TaskCard";
const InProgress = (props) => {
  const tasks = props.tasks.tasks;
  const [modalShow, setModalShow] = useState(false);

  const showTasks =
    tasks &&
    tasks.length > 0 &&
    tasks.map((task) => {
      if (task.status === "IN_PROGRESS")
        return (
          <TaskCard key={task._id} task={task} moveTask={props.moveTask} />
        );
    });
  return (
    <div>
      <h3 className="text-white mb-3">In Progress</h3>

      {showTasks}
    </div>
  );
};

export default InProgress;
