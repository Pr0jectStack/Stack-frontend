import axios from "axios";
import { API } from "../../backend";
import { editProfileDataFromLogin } from "../profile/profileActions";
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE,EMPTY_SIGN_IN_ERROR } from "./authTypes";

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
const emptySignInError = () => {
  return {
    type: EMPTY_SIGN_IN_ERROR,
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
        // const errorMsg = error.message;
        //TODO: MESSAGE NOT SHOWING THE RETURNED MESSAGE FROM BACKEND
        const errorMsg ="Invalid login details"
        console.log(error);
        dispatch(signInFailure(errorMsg));
      });
  };
};

export const removeSignInError = () =>{
  return (dispatch) =>{
    dispatch(emptySignInError());
  }
}
