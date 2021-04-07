import axios from "axios";
import { API } from "../../backend";
import { editProfileDataFromLogin } from "../profile/profileActions";
import { setTasks } from "../task/taskActions";
import {
  ADD_TEAM_SUCCESS,
  ADD_TEAM_REQUEST,
  ADD_TEAM_FAILURE,
  UPDATE_CURRENT_TEAM_SUCCESS,
  UPDATE_CURRENT_TEAM_REQUEST,
  UPDATE_CURRENT_TEAM_FAILURE,
  ADD_MEMBERS_TO_TEAM_FAILURE,
  ADD_MEMBERS_TO_TEAM_SUCCESS,
  ADD_MEMBERS_TO_TEAM_REQUEST,
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

const updateCurrentTeamRequest = () => {
  return {
    type: UPDATE_CURRENT_TEAM_REQUEST,
  };
};

const updateCurrentTeamSuccess = (newTeam) => {
  return {
    type: UPDATE_CURRENT_TEAM_SUCCESS,
    payload: newTeam,
  };
};

const updateCurrentTeamFailure = (errorMsg) => {
  return {
    type: UPDATE_CURRENT_TEAM_FAILURE,
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

export const updateCurrentTeam = (data) => {
  return (dispatch) => {
    dispatch(updateCurrentTeamRequest());
    axios
      .get(`${API}/db/getTeamById?tid=${data}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        if (data.error) {
          return dispatch(updateCurrentTeamFailure(data.error));
        } else {
          dispatch(setTasks(data.team.tasks, data.team._id));
          dispatch(updateCurrentTeamSuccess(data.team));
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateCurrentTeamFailure(errorMsg));
      });
  };
};
