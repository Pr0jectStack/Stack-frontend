import { API } from "../../backend";
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "./authTypes";

const signInRequest = () => {
  return {
    type: SIGN_UP_REQUEST,
  };
};

const signInSuccess = (userData) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: userData,
  };
};

const signInFailure = (errorMsg) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: errorMsg,
  };
};

export const signUpUser = (data) => {
  return (dispatch) => {
    dispatch(signInRequest());
    fetch(`${API}/auth/signUp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        const userData = response.data;
        dispatch(signInSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(signInFailure(errorMsg));
      });
  };
};
