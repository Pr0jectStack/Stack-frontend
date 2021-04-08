import React, { useState } from "react";
import TaskCard from "./TaskCard";
const Completed = (props) => {
  const tasks = props.tasks.tasks;
  const [modalShow, setModalShow] = useState(false);

  const showTasks =
    tasks &&
    tasks.length > 0 &&
    tasks.map((task) => {
      if (task.status === "COMPLETED")
        return (
          <TaskCard
            key={task._id}
            task={task}
            moveTask={props.moveTask}
            editTask={props.editTask}
            deleteTask={props.deleteTask}
            hasAuth={props.hasAuth}
          />
        );
    });
  return (
    <div>
      <h3 className="text-white mb-3">Completed</h3>
      {showTasks}
    </div>
  );
};

export default Completed;
