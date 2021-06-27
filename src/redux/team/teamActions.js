import axios from "axios";
import { API } from "../../backend";
import { setTasks } from "../task/taskActions";
import {
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
  ADD_TEAM_FAILURE,
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE,
  ADD_MEMBERS_TO_TEAM_REQUEST,
  ADD_MEMBERS_TO_TEAM_SUCCESS,
  ADD_MEMBERS_TO_TEAM_FAILURE,
  MAKE_TEAM_LEADER_REQUEST,
  MAKE_TEAM_LEADER_SUCCESS,
  MAKE_TEAM_LEADER_FAILURE,
  UDPATE_TEAM_DETAILS_REQUEST,
  UDPATE_TEAM_DETAILS_SUCCESS,
  UDPATE_TEAM_DETAILS_FAILURE,
  DELETE_TEAM_REQUEST,
  DELETE_TEAM_SUCCESS,
  DELETE_TEAM_FAILURE,
} from "./teamTypes";

const addTeamRequest = () => {
  return {
    type: ADD_TEAM_REQUEST,
  };
};

const addTeamSuccess = (newTeam) => {
  return {
    type: ADD_TEAM_SUCCESS,
    payload: newTeam,
  };
};

const addTeamFailure = (errorMsg) => {
  return {
    type: ADD_TEAM_FAILURE,
    payload: errorMsg,
  };
};

const addMembersToTeamRequest = () => {
  return {
    type: ADD_MEMBERS_TO_TEAM_REQUEST,
  };
};

const addMembersToTeamSuccess = (newTeam) => {
  return {
    type: ADD_MEMBERS_TO_TEAM_SUCCESS,
    payload: newTeam,
  };
};

const addMembersToTeamFailure = (errorMsg) => {
  return {
    type: ADD_MEMBERS_TO_TEAM_FAILURE,
    payload: errorMsg,
  };
};

const fetchTeamRequest = () => {
  return {
    type: FETCH_TEAM_REQUEST,
  };
};

const fetchTeamSuccess = (newTeam) => {
  return {
    type: FETCH_TEAM_SUCCESS,
    payload: newTeam,
  };
};

const fetchTeamFailure = (errorMsg) => {
  return {
    type: FETCH_TEAM_FAILURE,
    payload: errorMsg,
  };
};

const makeTeamLeaderRequest = () => {
  return {
    type: MAKE_TEAM_LEADER_REQUEST,
  };
};

const makeTeamLeaderSuccess = (updatedTeam) => {
  return {
    type: MAKE_TEAM_LEADER_SUCCESS,
    payload: updatedTeam,
  };
};

const makeTeamLeaderFailure = (errorMsg) => {
  return {
    type: MAKE_TEAM_LEADER_FAILURE,
    payload: errorMsg,
  };
};

const updateTeamDetailsRequest = () => {
  return {
    type: UDPATE_TEAM_DETAILS_REQUEST,
  };
};

const updateTeamDetailsSuccess = (data) => {
  return {
    type: UDPATE_TEAM_DETAILS_SUCCESS,
    payload: data,
  };
};

const updateTeamDetailsFailure = (errorMsg) => {
  return {
    type: UDPATE_TEAM_DETAILS_FAILURE,
    payload: errorMsg,
  };
};

const deleteTeamRequest = () => {
  return {
    type: DELETE_TEAM_REQUEST,
  };
};

const deleteTeamSuccess = (data) => {
  return {
    type: DELETE_TEAM_SUCCESS,
    payload: data,
  };
};

const deleteTeamFailure = (errorMsg) => {
  return {
    type: DELETE_TEAM_FAILURE,
    payload: errorMsg,
  };
};

export const addNewTeam = (data) => {
  return (dispatch) => {
    dispatch(addTeamRequest());
    axios
      .post(`${API}/db/createTeam`, JSON.stringify(data), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        if (data.error) {
          return dispatch(addTeamFailure(data.error));
        } else {
          dispatch(addTeamSuccess(data.newTeam));
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(addTeamFailure(errorMsg));
      });
  };
};

export const addMembersToTeam = (data) => {
  return (dispatch) => {
    dispatch(addMembersToTeamRequest());

    axios
      .post(`${API}/db/addMembersToTeam`, JSON.stringify(data), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.error) {
          return dispatch(addMembersToTeamFailure(data.error));
        } else {
          dispatch(addMembersToTeamSuccess(data.team));
        }
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(addMembersToTeamFailure(errorMsg));
      });
  };
};

/**
 * Fetch team by ID.
 * @param {string} tid - Team ID
 * @returns Redux.Action
 */
export const getTeamById = (tid) => {
  return (dispatch) => {
    dispatch(fetchTeamRequest());
    axios
      .get(`${API}/db/getTeamById?tid=${tid}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        if (data.error) {
          return dispatch(fetchTeamFailure(data.error));
        } else {
          dispatch(
            setTasks(
              data.team.tasks,
              data.team._id,
              data.team.owner,
              data.team.teamLeader
            )
          );
          dispatch(fetchTeamSuccess(data.team));
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTeamFailure(errorMsg));
      });
  };
};

/**
 * Make API call to change a member from Member to Team Leader, if possible.
 * @param {Object} data - {tid: String, memberId: String}
 * @returns Redux.Action
 */
export const makeTeamLeader = (data) => {
  return (dispatch) => {
    dispatch(makeTeamLeaderRequest());
    axios
      .put(`${API}/db/makeTeamLeader`, JSON.stringify(data), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.error) {
          return dispatch(makeTeamLeaderFailure(data.error));
        } else {
          dispatch(makeTeamLeaderSuccess(data.team));
        }
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(makeTeamLeaderFailure(errorMsg));
      });
  };
};

export const updateTeamDetails = (data) => {
  return (dispatch) => {
    dispatch(updateTeamDetailsRequest());
    axios
      .put(`${API}/db/updateTeamDetails`, JSON.stringify(data), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.error) {
          return dispatch(updateTeamDetailsFailure(data.error));
        } else {
          dispatch(updateTeamDetailsSuccess(data.team));
        }
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(updateTeamDetailsFailure(errorMsg));
      });
  };
};

export const deleteTeam = (data) => {
  return (dispatch) => {
    dispatch(deleteTeamRequest());
    axios
      .post(`${API}/db/deleteTeam`, JSON.stringify(data), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.error) {
          return dispatch(deleteTeamFailure(data.error));
        } else {
          dispatch(deleteTeamSuccess(data.team));
        }
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(deleteTeamFailure(errorMsg));
      });
  };
};
