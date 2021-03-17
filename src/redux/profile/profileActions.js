import axios from "axios";
import { API } from "../../backend";
import {
  EDIT_USER_PROFILE_REQUEST,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILURE,
} from "./profileTypes";

const editUserProfileRequest = () => {
  return {
    type: EDIT_USER_PROFILE_REQUEST,
  };
};

const editUserProfileSuccess = (userData) => {
  return {
    type: EDIT_USER_PROFILE_SUCCESS,
    payload: userData,
  };
};

const editUserProfileFailure = (errorMsg) => {
  return {
    type: EDIT_USER_PROFILE_FAILURE,
    payload: errorMsg,
  };
};

export const editUserProfile = (data) => {
  console.log("DAta: ", data);

  return (dispatch) => {
    dispatch(editUserProfileRequest());
    axios
      .put(
        `${API}/db/updateUserProfile?userId=${data._id}`,
        JSON.stringify(data),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data.data;
        dispatch(editUserProfileSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(editUserProfileFailure(errorMsg));
      });
  };
};

export const editProfileDataFromLogin = (data) => {
  return (dispatch) => {
    dispatch(editUserProfileSuccess(data));
  };
};
