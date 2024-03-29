import axios from "axios";
import { API } from "../../backend";
import {
  ADD_TASK_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ASSIGN_MEMBERS_TASK_FAILURE,
  ASSIGN_MEMBERS_TASK_REQUEST,
  ASSIGN_MEMBERS_TASK_SUCCESS,
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

const setTask = (tasks, tid, owner, teamLeader) => {
  return {
    type: SET_TASK,
    payload: {
      tasks: tasks,
      tid: tid,
      owner: owner,
      teamLeader: teamLeader,
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

const assignMembersToTaskRequest = () => {
  return {
    type: ASSIGN_MEMBERS_TASK_REQUEST,
  };
};

const assignMembersToTaskSuccess = (updatedTask) => {
  return {
    type: ASSIGN_MEMBERS_TASK_SUCCESS,
    payload: updatedTask,
  };
};

const assignMembersToTaskFailure = (errorMsg) => {
  return {
    type: ASSIGN_MEMBERS_TASK_FAILURE,
    payload: errorMsg,
  };
};

/**
 * Set Task fetched from teams.
 * @param {Object} tasks - Task Object
 * @param {string} tid - Current Team ID
 * @param {string} owner - Current Team Onwer Id
 * @param {string} teamLeader - Current Team Leader Id
 * @returns void
 */
export const setTasks = (tasks, tid, owner, teamLeader) => {
  return (dispatch) => {
    dispatch(setTask(tasks, tid, owner, teamLeader));
  };
};

/**
 * Add new task.
 * @param {object} task - Task Object
 * @param {string} tid - Team id
 * @param {string} userId - User id
 * @returns void
 */
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

/**
 * Move task from one column to another.
 * @param {string} taskId - Task Id
 * @param {string} tid - Team Id
 * @param {string} destination - DEstination Column
 * @returns void
 */
export const moveTask = (taskId, tid, destination) => {
  return (dispatch) => {
    dispatch(moveTaskRequest());
    axios
      .put(
        `${API}/db/moveTask`,
        JSON.stringify({ tid: tid, taskId: taskId, destination: destination }),
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
          // console.log("erro", data.error);
          dispatch(moveTaskFailure(data.error));
        } else {
          dispatch(moveTaskSuccess(data.tasks));
        }
      })
      .catch((error) => {
        const errorMsg = error.response.data.error;
        dispatch(moveTaskFailure(errorMsg));
      });
  };
};

/**
 * Edit Task. Specifically handle request for changing
 * Task Name, Task Description, Deadline, Priority and Category.
 * @param {object} task - Task Object
 * @param {string} tid - Team ID
 * @param {string} userId - User ID
 * @returns void
 */
export const editTask = (task, tid, userId) => {
  return (dispatch) => {
    dispatch(editTaskRequest());
    axios
      .put(
        `${API}/db/editTask`,
        JSON.stringify({ tid: tid, ...task, userId: userId, taskId: task._id }),
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
          // console.log("erro", data.error);
          dispatch(editTaskFailure(data.error));
        } else {
          dispatch(editTaskSuccess(data.tasks));
        }
      })
      .catch((error) => {
        const errorMsg = error.response.data.error;
        dispatch(editTaskFailure(errorMsg));
      });
  };
};

/**
 * Delete Task.
 * @param {string} taskId - Task Id
 * @param {string} tid - Team Id
 * @param {string} userId - User Id
 * @returns void
 */
export const deleteTask = (taskId, tid, userId) => {
  return (dispatch) => {
    dispatch(deleteTaskRequest());
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
          // console.log("erro", data.error);
          dispatch(deleteTaskFailure(data.error));
        } else {
          dispatch(deleteTaskSuccess(data.tasks));
        }
      })
      .catch((error) => {
        const errorMsg = error.response.data.error;
        dispatch(deleteTaskFailure(errorMsg));
      });
  };
};

export const assignMembersToTask = (taskId, tid, userId, members) => {
  return (dispatch) => {
    dispatch(assignMembersToTaskRequest());
    axios
      .put(
        `${API}/db/assignMembersToTask`,
        JSON.stringify({
          tid: tid,
          taskId: taskId,
          userId: userId,
          members: members,
        }),
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
          // console.log("erro", data.error);
          dispatch(assignMembersToTaskFailure(data.error));
        } else {
          dispatch(assignMembersToTaskSuccess(data.tasks));
        }
      })
      .catch((error) => {
        const errorMsg = error.response.data.error;
        dispatch(assignMembersToTaskFailure(errorMsg));
      });
  };
};
