import axios from "axios";
import { API } from "../../backend";
import {
  ADD_TASK_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  EDIT_TASK_REQUEST,
  EDIT_TASK_SUCCESS,
  MOVE_TASK_FAILURE,
  MOVE_TASK_REQUEST,
  MOVE_TASK_SUCCESS,
  SET_TASK,
} from "./taskTypes";

const setTask = (tasks, tid) => {
  return {
    type: SET_TASK,
    payload: {
      tasks: tasks,
      tid: tid,
    },
  };
};

const addTaskRequest = () => {
  return {
    type: ADD_TASK_REQUEST,
  };
};

const addTaskSuccess = (newTask) => {
  return {
    type: ADD_TASK_SUCCESS,
    payload: newTask,
  };
};

const addTaskFailure = (errorMsg) => {
  return {
    type: ADD_TASK_FAILURE,
    payload: errorMsg,
  };
};

const editTaskRequest = () => {
  return {
    type: EDIT_TASK_REQUEST,
  };
};

const editTaskSuccess = (updatedTask) => {
  return {
    type: EDIT_TASK_SUCCESS,
    payload: updatedTask,
  };
};

const editTaskFailure = (errorMsg) => {
  return {
    type: EDIT_TASK_FAILURE,
    payload: errorMsg,
  };
};

const moveTaskRequest = () => {
  return {
    type: MOVE_TASK_REQUEST,
  };
};

const moveTaskSuccess = (updatedTask) => {
  return {
    type: MOVE_TASK_SUCCESS,
    payload: updatedTask,
  };
};

const moveTaskFailure = (errorMsg) => {
  return {
    type: MOVE_TASK_FAILURE,
    payload: errorMsg,
  };
};

const deleteTaskRequest = () => {
  return {
    type: DELETE_TASK_REQUEST,
  };
};

const deleteTaskSuccess = (updatedTask) => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: updatedTask,
  };
};

const deleteTaskFailure = (errorMsg) => {
  return {
    type: DELETE_TASK_FAILURE,
    payload: errorMsg,
  };
};

/**
 * Set Task fetched from teams.
 * @param {Object} tasks - Task Object
 * @param {String} tid - CurrentTeam ID
 * @returns Redux.dispatch
 */
export const setTasks = (tasks, tid) => {
  return (dispatch) => {
    dispatch(setTask(tasks, tid));
  };
};

export const addNewTask = (task, tid, userId) => {
  return (dispatch) => {
    dispatch(addTaskRequest());
    axios
      .post(
        `${API}/db/addTask`,
        JSON.stringify({ tid: tid, ...task, userId: userId }),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;

        if (data.error) {
          console.log("erro", data.error);
          dispatch(addTaskFailure(data.error));
        } else {
          dispatch(addTaskSuccess(data.tasks));
        }
      })
      .catch((error) => {
        const errorMsg = error.response.data.error;
        dispatch(addTaskFailure(errorMsg));
      });
  };
};

export const deleteTask = (taskId, tid, userId) => {
  return (dispatch) => {
    dispatch(addTaskRequest());
    axios
      .post(
        `${API}/db/deleteTask`,
        JSON.stringify({ tid: tid, taskId: taskId, userId: userId }),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;

        if (data.error) {
          console.log("erro", data.error);
          dispatch(addTaskFailure(data.error));
        } else {
          dispatch(addTaskSuccess(data.tasks));
        }
      })
      .catch((error) => {
        const errorMsg = error.response.data.error;
        dispatch(addTaskFailure(errorMsg));
      });
  };
};
