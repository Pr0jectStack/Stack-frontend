import axios from "axios";
import { API } from "../../backend";
import { setUserProfile } from "../profile/profileActions";
import {
  CHANGE_SETTINGS_FAILURE,
  CHANGE_SETTINGS_REQUEST,
  CHANGE_SETTINGS_SUCCESS,
} from "./setttingsTypes";

const changeSettingsRequest = () => {
  return {
    type: CHANGE_SETTINGS_REQUEST,
  };
};

const changeSettingsSuccess = (changedData) => {
  return {
    type: CHANGE_SETTINGS_SUCCESS,
    payload: changedData,
  };
};

const changeSettingsFailure = (errorMsg) => {
  return {
    type: CHANGE_SETTINGS_FAILURE,
    payload: errorMsg,
  };
};

export const changeOtherSettings = (changedData) => {
  return (dispatch) => {
    dispatch(changeSettingsRequest());
    axios
      .put(
        `${API}/db/updateUserProfile?userId=${changedData._id}`,
        JSON.stringify(changedData),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data.data;
        dispatch(setUserProfile(data));
        dispatch(changeSettingsSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(changeSettingsFailure(errorMsg));
      });
  };
};

// ! TODO: Complete the functions
export const changeImage = (userId, changedImaged) => {
  return (dispatch) => {
    dispatch(changeSettingsRequest());
  };
};

export const changePassword = (userId, passwords) => {
  delete passwords.confirm_new_password;
  return (dispatch) => {
    dispatch(changeSettingsRequest());
    axios
      .put(
        `${API}/db/updateUserPassword?userId=${userId}`,
        JSON.stringify(passwords),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data.data;
        dispatch(changeSettingsSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(changeSettingsFailure(errorMsg));
      });
  };
};
