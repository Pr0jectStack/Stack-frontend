import axios from "axios";
import { API } from "../../backend";
import { editProfileDataFromLogin } from "../profile/profileActions";
import {
  ADD_TEAM_SUCCESS,
  ADD_TEAM_REQUEST,
  ADD_TEAM_FAILURE,
  UPDATE_CURRENT_TEAM_SUCCESS,
  UPDATE_CURRENT_TEAM_REQUEST,
  UPDATE_CURRENT_TEAM_FAILURE,
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

// export const updateCurrentTeam = (data) => {
//   return (dispatch) => {
//     dispatch(updateCurrentTeamRequest());
//     axios
//       .post(`${API}/db/getWorkSpaceById`, JSON.stringify({wid:data}), {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         const data = response.data;

//         if (data.error) {
//           return dispatch(updateCurrentTeamFailure(data.error));
//         } else {
//           dispatch(updateCurrentTeamSuccess(data.workspace));
//         }
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch(updateCurrentTeamFailure(errorMsg));
//       });
//   };
// };

