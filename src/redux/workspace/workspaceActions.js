import axios from "axios";
import { API } from "../../backend";
import {
  ADD_WORKSPACE_SUCCESS,
  ADD_WORKSPACE_REQUEST,
  ADD_WORKSPACE_FAILURE,
  DELETE_WORKSPACE_SUCCESS,
  DELETE_WORKSPACE_REQUEST,
  DELETE_WORKSPACE_FAILURE,
  FETCH_WORKSPACE_SUCCESS,
  FETCH_WORKSPACE_REQUEST,
  FETCH_WORKSPACE_FAILURE,
  ADD_MEMBERS_TO_WORKSPACE_FAILURE,
  ADD_MEMBERS_TO_WORKSPACE_REQUEST,
  ADD_MEMBERS_TO_WORKSPACE_SUCCESS,
  UDPATE_WORKSPACE_DETAILS_REQUEST,
  UDPATE_WORKSPACE_DETAILS_SUCCESS,
  UDPATE_WORKSPACE_DETAILS_FAILURE,
} from "./workspaceTypes";

const addWorkspaceRequest = () => {
  return {
    type: ADD_WORKSPACE_REQUEST,
  };
};

const addWorkspaceSuccess = (newWorkspace) => {
  return {
    type: ADD_WORKSPACE_SUCCESS,
    payload: newWorkspace,
  };
};

const addWorkspaceFailure = (errorMsg) => {
  return {
    type: ADD_WORKSPACE_FAILURE,
    payload: errorMsg,
  };
};

const deleteWorkspaceRequest = () => {
  return {
    type: DELETE_WORKSPACE_REQUEST,
  };
};

const deleteWorkspaceSuccess = (data) => {
  return {
    type: DELETE_WORKSPACE_SUCCESS,
    payload: data,
  };
};

const deleteWorkspaceFailure = (errorMsg) => {
  return {
    type: DELETE_WORKSPACE_FAILURE,
    payload: errorMsg,
  };
};

const fetchWorkspaceRequest = () => {
  return {
    type: FETCH_WORKSPACE_REQUEST,
  };
};

const fetchWorkspaceSuccess = (newWorkspace) => {
  return {
    type: FETCH_WORKSPACE_SUCCESS,
    payload: newWorkspace,
  };
};

const fetchWorkspaceFailure = (errorMsg) => {
  return {
    type: FETCH_WORKSPACE_FAILURE,
    payload: errorMsg,
  };
};

const addMembersToWorkspaceRequest = () => {
  return {
    type: ADD_MEMBERS_TO_WORKSPACE_REQUEST,
  };
};

const addMembersToWorkspaceSuccess = (newWorkspace) => {
  return {
    type: ADD_MEMBERS_TO_WORKSPACE_SUCCESS,
    payload: newWorkspace,
  };
};

const addMembersToWorkspaceFailure = (errorMsg) => {
  return {
    type: ADD_MEMBERS_TO_WORKSPACE_FAILURE,
    payload: errorMsg,
  };
};

const updateWorkspaceDetailsRequest = () => {
  return {
    type: UDPATE_WORKSPACE_DETAILS_REQUEST,
  };
};

const updateWorkspaceDetailsSuccess = (data) => {
  return {
    type: UDPATE_WORKSPACE_DETAILS_SUCCESS,
    payload: data,
  };
};

const updateWorkspaceDetailsFailure = (errorMsg) => {
  return {
    type: UDPATE_WORKSPACE_DETAILS_FAILURE,
    payload: errorMsg,
  };
};

export const addNewWorkspace = (data) => {
  return (dispatch) => {
    dispatch(addWorkspaceRequest());
    axios
      .post(`${API}/db/createWorkspace`, JSON.stringify(data), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        if (data.error) {
          return dispatch(addWorkspaceFailure(data.error));
        } else {
          dispatch(addWorkspaceSuccess(data.newWorkspace));
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(addWorkspaceFailure(errorMsg));
      });
  };
};

export const getWorkspaceById = (wid) => {
  return (dispatch) => {
    dispatch(fetchWorkspaceRequest());
    axios
      .get(`${API}/db/getWorkSpaceById?wid=${wid}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        if (data.error) {
          return dispatch(fetchWorkspaceFailure(data.error));
        } else {
          dispatch(fetchWorkspaceSuccess(data.workspace));
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchWorkspaceFailure(errorMsg));
      });
  };
};

/**
 * Add members to workspace
 * @param {onject} data - Object containing Array of userIds to be added, wid, userId
 * @returns Redux.Action
 */
export const addMembersToWorkspace = (data) => {
  return (dispatch) => {
    dispatch(addMembersToWorkspaceRequest());

    axios
      .post(`${API}/db/addMembersToWorkspace`, JSON.stringify(data), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.error) {
          return dispatch(addMembersToWorkspaceFailure(data.error));
        } else {
          dispatch(addMembersToWorkspaceSuccess(data.workspace));
        }
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(addMembersToWorkspaceFailure(errorMsg));
      });
  };
};

export const updateWorkspaceDetails = (data) => {
  return (dispatch) => {
    dispatch(updateWorkspaceDetailsRequest());
    axios
      .put(`${API}/db/updateWorkspaceDetails`, JSON.stringify(data), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.error) {
          return dispatch(updateWorkspaceDetailsFailure(data.error));
        } else {
          dispatch(updateWorkspaceDetailsSuccess(data.workspace));
        }
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(updateWorkspaceDetailsFailure(errorMsg));
      });
  };
};

export const deleteWorkspace = (data) => {
  return (dispatch) => {
    dispatch(deleteWorkspaceRequest());
    axios
      .delete(`${API}/db/deleteWorkspace`, JSON.stringify(data), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        if (data.error) {
          return dispatch(deleteWorkspaceFailure(data.error));
        } else {
          dispatch(deleteWorkspaceSuccess(data.user));
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteWorkspaceFailure(errorMsg));
      });
  };
};
