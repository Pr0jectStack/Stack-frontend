import axios from "axios";
import { API } from "../../backend";
import { editProfileDataFromLogin } from "../profile/profileActions";
import { SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE } from "./authTypes";


const signOutRequest = () => {
    return {
      type: SIGN_OUT_REQUEST,
    };
  };
  
  const signOutSuccess = (userData) => {
    return {
      type: SIGN_OUT_SUCCESS,
      payload: userData,
    };
  };
  
  const signOutFailure = (errorMsg) => {
    return {
      type: SIGN_OUT_FAILURE,
      payload: errorMsg,
    };
  };
  
  export const signOutUser = () => {
    return (dispatch) => {
      dispatch(signOutRequest());
      axios
        .get(`${API}/auth/signOut`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const data = response.data;
  
          if (typeof window !== undefined) {
            localStorage.removeItem("jwt");
          }
  
  
          dispatch(signOutSuccess(data.message));
          dispatch(editProfileDataFromLogin(null));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(signOutFailure(errorMsg));
        });
    };
  };
  