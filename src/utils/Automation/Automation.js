import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { confirmAlert } from "react-confirm-alert"; 
import "react-confirm-alert/src/react-confirm-alert.css"; 

const Automation = (props) => {
  const moveTaskFunc = props.moveTask;
  const tasks = props.tasks.tasks;
  const deleteTaskFunc = props.deleteTask;
  const hasAuth = props.hasAuth;

  const [moveTask, setMoveTask] = useState({
    task: "",
    location: "",
  });
  const [deleteTask, setDeleteTask] = useState("");

  const [task, setTask] = useState("");
  const commands = [
    {
      command: "Change the status of * to *",
      callback: (task, location) =>
        setMoveTask({ ...moveTask, task: task, location: location }),
    },
    {
      command: "the status of * to *",
      callback: (task, location) =>
        setMoveTask({ ...moveTask, task: task, location: location }),
    },
    {
      command: "status of * to *",
      callback: (task, location) =>
        setMoveTask({ ...moveTask, task: task, location: location }),
    },
    {
      command: "of * to *",
      callback: (task, location) =>
        setMoveTask({ ...moveTask, task: task, location: location }),
    },
    {
      command: "Change the status of * 2 *",
      callback: (task, location) =>
        setMoveTask({ ...moveTask, task: task, location: location }),
    },
    {
      command: "the status of * 2 *",
      callback: (task, location) =>
        setMoveTask({ ...moveTask, task: task, location: location }),
    },
    {
      command: "status of * 2 *",
      callback: (task, location) =>
        setMoveTask({ ...moveTask, task: task, location: location }),
    },
    {
      command: "of * 2 *",
      callback: (task, location) =>
        setMoveTask({ ...moveTask, task: task, location: location }),
    },

    {
      command: "Open *",
      callback: (task) => setTask(task),
    },
    {
      command: "Remove *",
      callback: (task) => setDeleteTask(task),
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  const validLocation = (loc) => {
    // console.log("Location: "+loc);
    const locations = ["BACKLOG", "PROGRESS", "REVIEW", "COMPLETED", "NOT"];
    let match = "";
    locations.map((location) => {
      // console.log("Matching "+loc.toUpperCase()+" && "+(location).toUpperCase());
      if (location === "NOT") return "";
      if (loc.toUpperCase() == location.toUpperCase()) {
        // console.log("Matched to "+location)
        if (location === "PROGRESS") {
          match = "IN_PROGRESS";
        } else match = location;
      }
    });
    if (match) return match;
  };

  const findTask = (tname) => {
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].taskName.toUpperCase() == tname.toUpperCase()) {
        return tasks[i]._id;
      }
      if (i == tasks.length - 1) {
        return -1;
      }
    }
  };
  if (moveTask.task) {
    let location = validLocation(moveTask.location);
    console.log("Inside" + " " + location);
    if (location) {
      let taskId = findTask(moveTask.task);
      console.log("TID: " + taskId);
      if (taskId == -1) {
        //ERROR message
        setMoveTask({ ...moveTask, task: "", location: "" });
        return;
      } else {
        console.log("DOne");
        setMoveTask({ ...moveTask, task: "", location: "" });
        moveTaskFunc(taskId, location);
      }
    } else {
      setMoveTask({ ...moveTask, task: "", location: "" });
      return;
    }
  }

  const onConfirm = (taskDesc, taskId) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: `Are you sure to do delete ${taskDesc}`,
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteTaskFunc(taskId),
        },
        {
          label: "No",
          onClick: () => setDeleteTask(""),
        },
      ],
    });
  };

  if (deleteTask) {
    if (!hasAuth) return;
    let taskId = findTask(deleteTask);
    if (taskId == -1 || !hasAuth) {
      setDeleteTask("");
      return;
    } else if (hasAuth) {
      onConfirm(deleteTask, taskId);
      setDeleteTask("");
      // deleteTaskFunc(taskId);
    }
  }

  return (
    <div>
      <p id="transcript" className="text-white">
        Transcript: {transcript}
      </p>
      <button onClick={SpeechRecognition.startListening}>
        <i class="fa fa-microphone" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Automation;
