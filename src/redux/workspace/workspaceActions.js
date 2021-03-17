import axios from "axios";
import { API } from "../../backend";
import { editProfileDataFromLogin } from "../profile/profileActions";
import { ADD_WORKSPACE_SUCCESS, ADD_WORKSPACE_REQUEST, ADD_WORKSPACE_FAILURE } from "./workspaceTypes";

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

        if(data.error){
         return  dispatch(addWorkspaceFailure(data.error));
        }
        else{
            dispatch(addWorkspaceSuccess(data.newWorkspace));
        }

        // if (typeof window !== undefined) {
        //   localStorage.setItem("jwt", JSON.stringify(data.token));
        // }


        // dispatch(signInSuccess(data.user));
        // dispatch(editProfileDataFromLogin(data.user));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(addWorkspaceFailure(errorMsg));
      });
  };
};
