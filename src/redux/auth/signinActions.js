import axios from "axios";
import { API } from "../../backend";
import { editProfileDataFromLogin } from "../profile/profileActions";
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from "./authTypes";

const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST,
  };
};

const signInSuccess = (userData) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: userData,
  };
};

const signInFailure = (errorMsg) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: errorMsg,
  };
};

export const signInUser = (data) => {
  return (dispatch) => {
    dispatch(signInRequest());
    axios
      .post(`${API}/auth/signIn`, JSON.stringify(data), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        if (typeof window !== undefined) {
          localStorage.setItem("jwt", JSON.stringify(data.token));
        }


        dispatch(signInSuccess(data.user));
        dispatch(editProfileDataFromLogin(data.user));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(signInFailure(errorMsg));
      });
  };
};
