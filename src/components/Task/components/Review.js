import React, { useState } from "react";
import TaskCard from "./TaskCard";
const Review = (props) => {
  const tasks = props.tasks.tasks;
  const [modalShow, setModalShow] = useState(false);

  const showTasks =
    tasks &&
    tasks.length > 0 &&
    tasks.map((task) => {
      if (task.status === "REVIEW")
        return (
          <TaskCard
            key={task._id}
            task={task}
            moveTask={props.moveTask}
            editTask={props.editTask}
            hasAuth={props.hasAuth}
          />
        );
    });
  return (
    <div>
      <h3 className="text-white mb-3">Review</h3>
      {showTasks}
    </div>
  );
};

export default Review;
