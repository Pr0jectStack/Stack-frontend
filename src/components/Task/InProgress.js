import React,{useState} from "react";
import TaskCard from "./TaskCard";
const InProgress = (props) => {
  const addTask = props.addTask;
  const tasks = props.tasks;
  const [modalShow, setModalShow] = useState(false);

  const showTasks =
    tasks.length > 0 &&
    tasks.map((task) => {
      let { taskDescription, category } = task;
    
      if(category === "inProgress")
      return <TaskCard taskDescription={taskDescription} category={category} />;
    });
  return (
    <div>
      <h3 className="text-white mb-3">InProgress</h3>
      
      {showTasks}
    </div>
  );
};

export default InProgress;
